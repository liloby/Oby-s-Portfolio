import { useState, useEffect } from 'react'
import TimeSupCard from '../../components/TimeSupCard/TimeSupCard'
import Foodscovery from '../../components/Foodscovery/Foodscovery'
import Blackjack from '../../components/Blackjack/Blackjack'
import Rokitshop from '../../components/Rokitshop/Rokitshop'

export default function PortfolioPage({lightMode}) {
    const [image, setImage] = useState(1)
    const [currentProject, setCurrentProject] = useState(1)

useEffect(() => {
    setImage(1)
}, [currentProject])

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

    function Project3() {
        setCurrentProject(3)
    }

    function Project4() {
        setCurrentProject(4)
    }


    return (
        <div className="Routes">
            <div className="Projects-wrapper">
                <div className='project-btn-wrapper'>
                    <button className={currentProject === 1 ? 'selected-project project-btn timesup-btn' : 'project-btn timesup-btn'} style={lightMode ? {color: 'rgb(70 84 133)'} : {color: 'white'}} onClick={Project1}>TimeSup</button>
                    <button className={currentProject === 2 ? 'selected-project project-btn foodscovery-btn' : 'project-btn foodscovery-btn'} style={lightMode ? {color: 'rgb(70 84 133)'} : {color: 'white'}} onClick={Project2}>Foodscovery</button>
                    <button className={currentProject === 3 ? 'selected-project project-btn blackjack-btn' : 'project-btn blackjack-btn'} style={lightMode ? {color: 'rgb(70 84 133)'} : {color: 'white'}} onClick={Project3}>Blackjack</button>
                    <button className={currentProject === 4 ? 'selected-project project-btn rokitshop-btn' : 'project-btn rokitshop-btn'} style={lightMode ? {color: 'rgb(70 84 133)'} : {color: 'white'}} onClick={Project4}>RokitShop</button>
                </div>
                { currentProject === 1 ?
                <TimeSupCard image={image} tab1={tab1} tab2={tab2} tab3={tab3} lightMode={lightMode} />
                : currentProject === 2 ?
                <Foodscovery image={image} tab1={tab1} tab2={tab2} tab3={tab3} lightMode={lightMode} />
                : currentProject === 3 ?
                <Blackjack image={image} tab1={tab1} tab2={tab2} tab3={tab3} lightMode={lightMode} />
                :
                <Rokitshop image={image} tab1={tab1} tab2={tab2} tab3={tab3} lightMode={lightMode} />
                }
            </div>
        </div>
    )
}