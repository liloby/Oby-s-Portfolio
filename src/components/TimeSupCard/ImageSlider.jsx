export default function ImageSlider({slides}) {
    return (
        <div>
            <img src={slides[0].url} alt="" height="500px" width="500px" />
        </div>
    )
}