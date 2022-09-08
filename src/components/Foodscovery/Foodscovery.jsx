export default function Foodscovery({ image, tab1, tab2, tab3}) {
    return (
        <div className='foodscovery-wrapper'> 
                <h2>Foodscovery</h2>
                <div className="slide-container">
                    <span id="slider-image-4"></span>
                    <span id="slider-image-5"></span>
                    <span id="slider-image-6"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./foodscovery/index.png')} height="450px" width="650px" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"} src={require('./foodscovery/profile.png')}  height="450px" width="650px" />
                        <img className={image === 3 ? "slider-image selected-image" : "slider-image"} src={require('./foodscovery/detail.png')}  height="450px" width="650px" />
                    </div>
                    <div className="button-container">
                        <a href="#slider-image-4" onClick={tab1} className={image === 1 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-5" onClick={tab2} className={image === 2 ? 'selected slider-button': 'slider-button'}></a>
                        <a href="#slider-image-6" onClick={tab3} className={image === 3 ? 'selected slider-button': 'slider-button'}></a>
                    </div>
                </div>
            </div>
    )
}