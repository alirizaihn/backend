
const ReferralCode = require("../models/referralCode.model");
const User = require('../models/user.model');
const Role = require('../models/role.model');
const generateUniqueReferralCode = () => {
  const datePart = new Date().getTime().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 5);
  return datePart + randomPart;
};

  const register = async (req, res, next) => {
    console.log("bak",req.body);
    const {name,email,phone,instagram, referralCode, role} = req.body
    try{
      if(!name || !email || !phone || !instagram || !referralCode || !role) {
        return res.status(401).json({message:"Missing Paramete"});
      }
      const referralCodeDocument = await ReferralCode.findOne({ code: referralCode });
      const roleDocument = await Role.findById(role);

      if(!role) {
        return res.status(400).json({message:"Invalid role "})
      }
      if (!referralCodeDocument) {
        return res.status(400).json({ message: "Invalid referral code." });
      }
      const user = new User({
        name,
        email,
        phone,
        instagram,
        registerCode:referralCodeDocument._id,
        role:roleDocument._id
      });
     
      user.save().then(async (usr) => {
        const uniqueReferralCode = generateUniqueReferralCode();
        const newReferralCode = new ReferralCode({
          count:0,
          owner:usr._id,
          code:uniqueReferralCode
        })
        referralCodeDocument.count++;
        await referralCodeDocument.save();
        await newReferralCode.save().then(async ref => {
          usr.referralCode = ref._id
          try {
            await usr.save()
          } catch (error) {
            return res.status(400).json({message:'Referral Code is not assigned '})
          }
          
        });
       
        res.json({ message: "User was registered successfully!" , referralCode:newReferralCode?.code });
      });
    } catch (error) {
      next(error);
    }
 

 
};
module.exports = { register };