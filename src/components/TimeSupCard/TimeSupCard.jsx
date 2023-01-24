export default function TimeSupCard({ image, tab1, tab2, tab3, lightMode }) {
    return (
        <div className={lightMode ? 'timeSup-wrapper light-project' : 'timeSup-wrapper'}> 
                <h2>TimeSup</h2>
                <h4>Dating App that features an expiration date on each match</h4>
                <p>No Account? Email: Test1@gmail.com Password: test123 </p>
                <div className='project-links'>
                    <a className={lightMode ? "light-a" : "dark-a"} target="_blank" href="https://timesupdateapp.herokuapp.com/">Live App</a>
                    <a className={lightMode ? "light-a" : "dark-a"}  target="_blank" href="https://github.com/liloby/TimeSup">Github</a>
                </div>
                <div className="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-3"></span>
                    <div className="image-container">
                        <img className={image === 1 ? "slider-image selected-image" : "slider-image"} src={require('./timeSup/index.png')} height="450px" width="650px" />
                        <img className={image === 2 ? "slider-image selected-image" : "slider-image"} src={require('./timeSup/profile.png')}  height="450px" width="650px" />
                        <img className={image === 3 ? "slider-image selected-image" : "slider-image"} src={require('./timeSup/chat.png')}  height="450px" width="650px" />
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