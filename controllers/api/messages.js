const Message = require('../../models/message')

module.exports = {
    create,
    index
}

async function create(req, res) {
    console.log(req.body)
    const message = await Message.create(req.body)
    res.json(message)
}

async function index(req, res) {
    const messages = await Message.find({})
    res.json(messages)
}