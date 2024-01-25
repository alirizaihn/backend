const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let result = await collection.find({}).limit(30).toArray();
    res.send(result).status(200)
})