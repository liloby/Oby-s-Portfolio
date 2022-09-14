import { useState } from 'react'

export default function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    function goPrevious() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(slides.length - 1)
        }
    }

    function goNext() {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }


    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goPrevious} >⇦</div>
            <div style={rightArrowStyles} onClick={goNext} >⇨</div>
            <div style={slideStyles}>

            </div>
        </div>
    )
}