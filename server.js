const express = require("express");
const mongoose = require("mongoose");
const user = require('./routes/user')
const bodyParser = require('body-parser')
const passport = require('passport')

mongoose
  .connect("mongodb://localhost:27017/wechat", { useNewUrlParser: true })
  .then(() => console.log("mongodb is connected"))
  .catch(err => console.log(err));

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//passport 初始化
app.use(passport.initialize())
require('./config/passport')(passport)


app.use(user)

app.listen(5000, () => console.log("Server is running on port 5000 @ @"));
