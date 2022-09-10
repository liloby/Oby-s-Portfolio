export default function Rokitshop({ image, tab1, tab2, tab3}) {
    return (
        <div className='rokitshop-wrapper'> 
                <h2>Rokitshop</h2>
                <div className='project-links'>
                    <a target="_blank" href="https://rokitshop.herokuapp.com/">Link to App</a>
                    <a target="_blank" href="https://github.com/ajebora1/rokitshop">Github</a>
                </div>
                <div className="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-3"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./Rokitshop/home.png')} height="500px" width="650px" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"} src={require('./Rokitshop/index.png')}  height="500px" width="650px" />
                        <img className={image === 3 ? "slider-image selected-image" : "slider-image"} src={require('./Rokitshop/profile.png')}  height="500px" width="650px" />
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