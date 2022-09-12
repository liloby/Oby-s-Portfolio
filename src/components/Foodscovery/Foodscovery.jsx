export default function Foodscovery({ image, tab1, tab2, tab3, lightMode}) {
    return (
        <div className={lightMode ? 'foodscovery-wrapper light-project' : 'foodscovery-wrapper'}> 
                <h2>Foodscovery</h2>
                <h4>Social app that allow users to share and discover their favorite restaurants</h4>
                <div className='project-links'>
                    <a className={lightMode ? "light-a" : "dark-a"}  target="_blank" href="https://foodscovery.herokuapp.com/">Live App</a>
                    <a className={lightMode ? "light-a" : "dark-a"}  target="_blank" href="https://github.com/liloby/restaurants-app">Github</a>
                </div>
                <div className="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-3"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./foodscovery/index.png')} height="550px" width="650px" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"} src={require('./foodscovery/profile.png')}  height="550px" width="650px" />
                        <img className={image === 3 ? "slider-image selected-image" : "slider-image"} src={require('./foodscovery/detail.png')}  height="550px" width="650px" />
                    </div>
                    <div className="button-container">
                        <a href="#slider-image-1" onClick={tab1} className={image === 1 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-2" onClick={tab2} className={image === 2 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-3" onClick={tab3} className={image === 3 ? 'selected slider-button': 'slider-button'}></a>
                    </div>
                </div>
            </div>
    )
}