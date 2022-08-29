export default function MessageCard({ message, idx}) {
    return (
        <div className="message-info-wrapper">
            <div className="date">{message.createdAt.slice(0, 10)}</div>
            <div>{message.name}</div>
            <div>{message.email}</div>
            <div>{message.phone}</div>
            <div>{message.message}</div>
        </div>
    )
}