export default function Blackjack({ image, tab1, tab2, tab3}) {
    return (
        <div className='blackjack-wrapper'> 
                <h2>Blackjack</h2>
                <div className='project-links'>
                    <a target="_blank" href="https://liloby.github.io/blackjack-project1/">Link to App</a>
                    <a target="_blank" href="https://github.com/liloby/blackjack-project1">Github</a>
                </div>
                <div className="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-4"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./Blackjack/start.png')} height="550px" width="650px" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"} src={require('./Blackjack/process.png')}  height="550px" width="650px" />
                        <img className={image === 3 ? "slider-image selected-image" : "slider-image"} src={require('./Blackjack/mobile.png')}  height="550px" width="280px" />
                    </div>
                    <div className="button-container">
                        <a href="#slider-image-1" onClick={tab1} className={image === 1 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-2" onClick={tab2} className={image === 2 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-4" onClick={tab3} className={image === 3 ? 'selected slider-button': 'slider-button'}></a>
                    </div>
                </div>
            </div>
    )
}