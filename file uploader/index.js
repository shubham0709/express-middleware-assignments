var express = require('express')
var multer = require('multer')
var port = 7000;

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage });

app.use(express.static(__dirname + '/public'));

app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('profile-file'), function (req, res, next) {
    console.log(JSON.stringify(req.file))
    var response = `Files uploaded successfully.<br>`
    return res.send(response)
})

app.listen(port, () => console.log(`Server running on port ${port}!`))