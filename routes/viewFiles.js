var express = require("express");
var router = express.Router();
let fs = require("fs");

/* GET home page. */
router.get("/", (req, res, next) => {
  fs.readdir("files", (err, dirFiles) => {
    if (err) {
      res.status(500).send("Error in reading folder");
    } else {
      let fileInfos = [];
      files = dirFiles.filter((file) => {
        return file.includes(".txt");
      });
      files.forEach((file) => {
        let content = fs.readFileSync("files/" + file, "utf8");
        fileInfos.push({ fileName: file, content });
      });
      res.status(200).json({ fileInfos });
    }
  });
});

module.exports = router;
