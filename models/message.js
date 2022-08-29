const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const messageSchema = new Schema(
    {
        name: String,
        email: String,
        phone: String,
        message: String,
        read: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Message", messageSchema);