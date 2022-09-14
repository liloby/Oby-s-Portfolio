import ImageSlider from './ImageSlider.jsx'

export default function TimeSupCard({ image, tab1, tab2, tab3, lightMode }) {
    const slides = [
        {url: require('./timeSup/index.png') , title: 'index'},
        {url: require('./timeSup/profile.png') , title: 'profile'},
        {url: require('./timeSup/chat.png') , title: 'chat'}
    ]
    return (
        <div className={lightMode ? 'timeSup-wrapper light-project' : 'timeSup-wrapper'}> 
            <h2>TimeSup</h2>
            <h4>Dating App that features an expiration date on each match</h4>
            <div className='project-links'>
                <a className={lightMode ? "light-a" : "dark-a"} target="_blank" href="https://timesupdateapp.herokuapp.com/">Live App</a>
                <a className={lightMode ? "light-a" : "dark-a"}  target="_blank" href="https://github.com/liloby/TimeSup">Github</a>
            </div>
            <ImageSlider slides={slides} />
        </div>
    )
}