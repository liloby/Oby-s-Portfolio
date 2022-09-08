import { useState } from 'react'

export default function PortfolioPage() {
    const [image, setImage] = useState(1)

    function tab1() {
        setImage(1)
    }

    function tab2() {
        setImage(2)
    }

    function tab3() {
        setImage(3)
    }

    return (
        <div className="Routes">
            <div className="Projects-wrapper">
            <h1 className="white Projects">
                My Projects
            </h1>
            <div className='timeSup-wrapper'> 
                <h2>TimeSup</h2>
                <div className="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-3"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./timeSup/index.png')} height="450px" width="650px" alt="" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"}src={require('./timeSup/profile.png')}  height="450px" width="650px"  alt="" />
                        <img className={image === 3 ? "slider-image selected-image" : "slider-image"}src={require('./timeSup/chat.png')}  height="450px" width="650px"  alt="" />
                    </div>
                    <div className="button-container">
                        <a href="#slider-image-1" onClick={tab1} className={image === 1 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-2" onClick={tab2} className={image === 2 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-3" onClick={tab3} className={image === 3 ? 'selected slider-button': 'slider-button'}></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}