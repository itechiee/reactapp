import React, { useEffect, useState } from "react";

const images = [
    'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
    'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
    'https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8',
    'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0'
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     // console.log('Component mounted or count changed', count);
    //     // return() => console.log('cleanup useEffect');
    // });

    const handleNext = () => {
        (currentIndex === images.length -1) ? setCurrentIndex(0) : setCurrentIndex(() => currentIndex +1)
    }

    const handlePrev = () => {
        // setCurrentIndex(() => currentIndex +1)
        (currentIndex === 0) ? setCurrentIndex(() => images.length -1) : setCurrentIndex(() => currentIndex -1)
    }
    return (
        <div>
            <h2>Slider</h2>
            <button onClick={handlePrev}>Previous Image</button>
            <img alt={`slider`} src={images[currentIndex]}  style={{ width: '600px', height: '300px', borderRadius: '8px' }} />
            {/* {images.map((url, index) => <img key={index} alt={`slider ${index}`} src={url}  style={{ width: '600px', height: '300px', borderRadius: '8px' }} />)} */}
            <button onClick={handleNext}>Next Image</button>
        </div>
    )
}

export default Slider;