const express = require("express");
const router = express.Router();
const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // You can add other image formats
const videoRegex = /\/.+\.(mp4|ogv)$/
router.get(imageRegex, (req, res) => {
 const filePath = req.path;
 res.redirect(303, `http://localhost:3000/src${filePath}`);
});
router.get(videoRegex, (req, res) => {
 const filePath = req.path;
 res.redirect(303, `http://localhost:3000/src${filePath}`);
});


//Another method of getting image and video files
// const fileRegexes = [
//     /\/.+\.(svg|png|jpg|jpeg)$/,  // Image formats
//     /\/.+\.(mp4|ogv)$/            // Video formats
//   ];
  
// fileRegexes.forEach(regex => {
//     router.get(regex, (req, res) => {
//       const filePath = req.path;
//       res.redirect(303, `http://localhost:3000/src${filePath}`);
//     });
//   });

  
module.exports = router;
