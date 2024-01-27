var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('mycustom', {name: 'My custom page'})
})

module.exports = router;