const ReferralCode = require('../models/referralCode.model')
const User = require('../models/user.model')

const checkDuplicateUsernameOrEmail = async (req, res, next) => {

  try {
    const user= await User.findOne({
      email: req.body.email
    })
    if (user) {
      res.status(400).json({ message: "Failed! Email is already in use!" });
      return;
    } else {
      next();
    }
  
  } catch (error) {
      res.status(500).json({ message: err });
    }

};

const checkReferralCodeExisted = async (req, res, next) => {
  if (req.body.referralCode) {
    
    const code = await ReferralCode.findOne({code:req.body.referralCode})
   
    try {
      if (!code) {
        res.status(400).json({ message: "Failed! Referral Code is invalid" });
        return;
      } else {
        next();
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

module.exports = {checkDuplicateUsernameOrEmail, checkReferralCodeExisted}