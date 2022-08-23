import { checkToken } from "../../utilities/users-service"

export default function AboutPage() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
        
    }

    return (
        <div className="Routes">
            <h1>AboutPage</h1>
        </div>
    )
}