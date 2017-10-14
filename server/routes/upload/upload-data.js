'use strict';

let 
    multer = require('multer'),
    DIR = './uploads/',
    upload = multer({dest: DIR}).single('photo');


module.exports = (req,res) => {
    var path = '';
    upload(req, res, function (err) {
       if (err) {
         console.log(err);
         return res.status(422).send("an Error occured")
       }        
       path = req.file.path;
       return res.send("Upload Completed for "+path); 
 });
}