import React from 'react';
import './Gallery.css';
import img1 from '../img/img1.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },

        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },

        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        }
    ];

    return(
        <>
        <h2 className='welcome'>Welcome to my gallery</h2>
        <div className='gallery'>
            {data.map((item, index) => {
                return(
                    <div className='img' key={index}>
                        <img src={item.imgSrc} alt="" style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;