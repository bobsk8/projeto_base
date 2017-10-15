'use strict'

let
    multer = require('multer'),
    path = require('path'),
    data = new Date(),
    dataFormatada = ("0" + data.getDate()).substr(-2) + "_"
        + ("0" + (data.getMonth() + 1)).substr(-2) + "_" + data.getFullYear();

let
    storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './uploads/')
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + '-' + dataFormatada + path.extname(file.originalname))
        }
    })


module.exports = (req, res) => {
    let upload = multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            let ext = path.extname(file.originalname)
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    }).single('photo');
    upload(req, res, function (err) {
        res.end('File is uploaded')
    })
};