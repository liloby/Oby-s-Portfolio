const Message = require('../../models/message')

module.exports = {
    create,
    index,
    update,
    delete: deleteMessage
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

async function update(req, res) {
    const readMessage = await Message.findOneAndUpdate(req.body, {read: true})
    readMessage.save()
    res.json(readMessage)
}

async function deleteMessage(req, res) {
    const deletedMessage = await Message.findOneAndDelete(req.body)
    res.json(deletedMessage)
}