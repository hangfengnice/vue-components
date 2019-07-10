// login && register
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/", (req, res) => {
  res.json({
    meg: "hello"
  });
});

// register
router.post("/register", (req, res) => {
  // console.log(req.body)
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "邮箱已被注册 @ @ " });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          // Store hash in your password DB.
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
      newUser;
    }
  });
});

// login
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ message: "用户不存在" });
    }

    // 密码匹配
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // console.log(user._id, user.id) // 一样
        const rule = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };
        jwt.sign(rule, "secret", { expiresIn: 36000 }, (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        return res.status(404).json({ message: "密码错误 " });
      }
    });
  });
});

//

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log()
    res.json(req.user);
  }
);

module.exports = router;
