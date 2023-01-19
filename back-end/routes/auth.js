const { Router } = require("express");
const User = require("../models/User");
const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  const user = new User(req.body);
  user.save((err, success) => {
    if (err) {
      return res.status(500).send({
        message: "Error Occurred",
      });
    }
    return res
      .status(201)
      .send({ message: "SignUp Success", Token: 1234, user: success._doc });
  });
});
authRouter.post("login", async (req, res) => {
  const { username, password } = req.body;
  const validate = await User.find({ username, password });
  return res.send(validate);
});

module.exports = authRouter;
