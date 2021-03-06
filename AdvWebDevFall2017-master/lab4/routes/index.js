var express = require('express');
var router = express.Router();
var ctrlHome = require('./employee.controller');

router.all('/', ctrlHome.home);
router.all('/index', ctrlHome.home);
router.all('/update/:id?', ctrlHome.update);
router.all('/delete/:id?', ctrlHome.delete);
router.all('/view/:id?', ctrlHome.view);

module.exports = router;
