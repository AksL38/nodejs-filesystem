var express = require("express");
var router = express.Router();
let fs = require("fs");

/* GET home page. */
router.post("/", (req, res, next) => {
  let currentDate = new Date();
  let content = currentDate.getTime().toString();
  let fileName =
    "files/" +
    currentDate.getDate() +
    currentDate.getMonth() +
    currentDate.getFullYear() +
    "-" +
    currentDate.getHours() +
    "h" +
    currentDate.getMinutes() +
    currentDate.getSeconds() +
    ".txt";
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
      res.status(500);
    }
  });
  console.log(content, fileName);
  res.end();
});

module.exports = router;
