const express = require("express");
const router = express.Router();
const messageCtrl = require('../../controllers/api/messages')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', messageCtrl.index)
router.post('/new', messageCtrl.create)
router.put('/read', messageCtrl.update)
router.delete('/delete', messageCtrl.delete)

module.exports = router