export default function Blackjack({ image, tab1, tab2, tab3, lightMode}) {
    return (
        <div className={lightMode ? 'blackjack-wrapper light-project' : 'blackjack-wrapper'}> 
                <h2>Blackjack</h2>
                <h4>A casino card game between a player competing against the dealer</h4>
                <div className='project-links'>
                    <a className={lightMode ? "light-a" : "dark-a"}  target="_blank" href="https://liloby.github.io/blackjack-project1/">Live App</a>
                    <a className={lightMode ? "light-a" : "dark-a"}  target="_blank" href="https://github.com/liloby/blackjack-project1">Github</a>
                </div>
                <div className="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-4"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./Blackjack/start.png')} height="450px" width="650px" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"} src={require('./Blackjack/process.png')}  height="450px" width="650px" />
                        <img className={image === 3 ? "slider-image selected-image mobile-image" : "slider-image mobile-image"} src={require('./Blackjack/mobile.png')}  height="450px" width="280px" />
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