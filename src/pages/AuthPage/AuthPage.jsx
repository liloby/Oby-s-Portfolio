import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState, useEffect } from 'react';
import * as messageAPI from '../../utilities/message-api'
import MessageCard from "../../components/MessageCard/MessageCard";

export default function AuthPage({ setUser, user }) {
    const [messages, setMessages] = useState([])

    useEffect(
        function () {
            async function getMessages() {

                const allMessages = await messageAPI.getAll()
                console.log(allMessages)
                setMessages(allMessages.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1 ))
            }
            if (user) {
                getMessages()

            }
        },
        [user]
    )


    console.log(messages, "STATE MESSAGES")

    return (
        <main className="second-main">
            <h1 className="white">Admin Page</h1>
            <h3 className="white myMessages">My Messages:</h3>
            { user ?
                <div className="message-wrapper">
                    {
                messages.map((message, idx) => (
                    <MessageCard message={message} key={message._id} idx={idx} />
                ))
                }
                </div>
            :
            <LoginForm setUser={setUser}/>
        }
        </main>
    )
}