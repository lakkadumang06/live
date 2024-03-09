var express = require('express');
var router = express.Router();
var user_controller = require('../controller/usercontroller');

/* GET home page. */
router.post('/add',user_controller.insert );
router.get('/get',user_controller.get_data );

module.exports = router;
