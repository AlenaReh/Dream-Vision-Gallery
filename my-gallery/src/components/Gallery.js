import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../img/img1.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';
import img11 from '../img/img11.jpg';
import img12 from '../img/img12.jpg';
import img13 from '../img/img13.jpg';
import img14 from '../img/img14.jpg';
import img15 from '../img/img15.jpg';
import img16 from '../img/img16.jpg';
import img17 from '../img/img17.jpg';
import img18 from '../img/img18.jpg';
import img20 from '../img/img20.jpg';
import img23 from '../img/img23.jpg';
import img25 from '../img/img25.jpg';
import img27 from '../img/img27.jpg';
import { FaWindowClose } from "react-icons/fa";


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
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 25,
            imgSrc: img25,
        },
        {
            id: 27,
            imgSrc: img27,
        }
    ];

    const [picked, setPicked] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        // console.log(imgSrc);
        setTempImgSrc(imgSrc);
        setPicked(true);
    }
    return(
        <>
        <h2 className='welcome'>Welcome to my gallery</h2>

        <div className={picked ? "picked open" : "picked"}>
            <img src={tempImgSrc} alt=""/>
            < FaWindowClose onClick={() => setPicked(false)} />

        
        </div>

        <div className='gallery'>
            {data.map((item, index) => {
                return(
                    <div className='img' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;