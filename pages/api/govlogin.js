import Gov from "../../models/Gov";
import connectDB from "../../middleware/mongoose";
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await Gov.findOne({ uid: req.body.InstId });
    if (user) {
      var token = jwt.sign(
        { uid: user.uid, name: user.name },
        process.env.JWT_SECRET
      );
      res.status(200).json({ success: true, token, uid: user.uid });
    } else {
      res.status(200).json({ success: false, error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "Invalid Method" });
  }
};

export default connectDB(handler);
