const Router = require('express');
const charCtrl = require('./char.controller')

const router = new Router();
router.route('/char/all').get(charCtrl.listAllChar)

module.exports = router;