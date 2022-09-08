import { useState } from 'react'
import TimeSupCard from '../../components/TimeSupCard/TimeSupCard'
import Foodscovery from '../../components/Foodscovery/Foodscovery'

export default function PortfolioPage() {
    const [image, setImage] = useState(1)
    const [currentProject, setCurrentProject] = useState(1)

    function tab1() {
        setImage(1)
    }

    function tab2() {
        setImage(2)
    }

    function tab3() {
        setImage(3)
    }

    function Project1() {
        setCurrentProject(1)
    }

    function Project2() {
        setCurrentProject(2)
    }


    return (
        <div className="Routes">
            <div className="Projects-wrapper">
                <h1>My Projects</h1>
                <div>
                    <button onClick={Project1}>Project 1</button>
                    <button onClick={Project2}>Project 2</button>
                    <button onClick={Project2}>Project 3</button>
                    <button onClick={Project2}>Project 4</button>
                </div>
                { currentProject === 1 ?
                <TimeSupCard image={image} tab1={tab1} tab2={tab2} tab3={tab3} />
                : 
                <Foodscovery image={image} tab1={tab1} tab2={tab2} tab3={tab3} />
                }
            </div>
        </div>
    )
}