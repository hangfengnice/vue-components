// login && register
const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const passport = require("passport");

router.get("/", (req, res) => {
  res.json({
    meg: "hello"
  });
});

// post add
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.body);
    const profileFields = {};
    if (req.body.img) profileFields.img = req.body.img;
    if (req.body.name) profileFields.name = req.body.name;
    if (req.body.text) profileFields.text = req.body.text;

    // 多张图片
    if (req.body.imgs) profileFields.imgs = req.body.imgs.split("|");
    new Profile(profileFields).save().then(profile => {
      // console.log(profile);
      res.json(profile);
    });
  }
);

// latest
router.get(
  "/latest",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find()
      .sort({ date: -1 })
      .then(profiles => {
        if (!profiles) {
          return res.status(404).json("没有任何消息");
        } else {
          let newProfiles = [];
          for (let i = 0; i < 3; i++) {
            if (profiles[i] != null) {
              newProfiles.push(profiles[i]);
            }
          }
          res.json(newProfiles);
        }
      });
  }
);

// loading 上拉加载
router.get(
  "/:page/:size",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find()
      .sort({ date: -1 })
      .then(profiles => {
        if (!profiles) {
          return res.status(404).json("没有任何消息");
        } else {
          let page = req.params.page;
          let size = req.params.size;
          let index = size * (page - 1);
          let newProfiles = [];
          for (let i = index; i < size * page; i++) {
            if (profiles[i] != null) {
              newProfiles.unshift(profiles[i]);
            }
          }
          res.json(newProfiles);
        }
      });
  }
);

module.exports = router;
