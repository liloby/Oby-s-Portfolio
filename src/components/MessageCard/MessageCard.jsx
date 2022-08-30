import * as messageAPI from '../../utilities/message-api'
import { useState } from 'react'
export default function MessageCard({ message, idx}) {
    const [currentMessage, setCurrentMessage] = useState(message)

    async function handleReadMessage(evt) {
        const messageId = {_id: currentMessage._id}
        const readMessage = await messageAPI.markRead(messageId)
        console.log(readMessage)
        setCurrentMessage(readMessage)
    }

    async function handleDeleteMessage(evt) {
        const messageId = {_id: currentMessage._id}
        const deleteMessage = await messageAPI.deleteMessage(messageId)
        setCurrentMessage(null)
    }

    return (
        <div className="message-info-wrapper">
            <div className="one-line">
            { currentMessage.read === false ?
                <form onSubmit={handleReadMessage}>
                <button className="mark-read-btn">✅</button>
                </form>
                :
                <form onSubmit={handleDeleteMessage}>
                    <button className="delete-btn">❌</button>
                </form>
            }
            <div className="date">{currentMessage.createdAt.slice(0, 10)}</div>
            </div>
            <div>{currentMessage.name}</div>
            <div>{currentMessage.email}</div>
            <div>{currentMessage.phone}</div>
            <div>{currentMessage.message}</div>
        </div>
    )
}