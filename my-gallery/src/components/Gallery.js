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
            title: "Fishing"
        },
        {
            id: 3,
            imgSrc: img3,
            title: "Summer"

        },
        {
            id: 4,
            imgSrc: img4,
            title: "Making Friends"

        },
        {
            id: 5,
            imgSrc: img5,
            title: "Carefree"

        },
        {
            id: 6,
            imgSrc: img6,
            title: "Ladybug"

        },

        {
            id: 8,
            imgSrc: img8,
            title: "Maze Runner"
        },
        {
            id: 9,
            imgSrc: img9,
            title: "Pumpkins"
        },
        {
            id: 10,
            imgSrc: img10,
            title: "Happy Halloween"
        },
        {
            id: 11,
            imgSrc: img11,
            title: "Freedom"
        },
        {
            id: 12,
            imgSrc: img12,
            title: "Fluff"
        },
        {
            id: 13,
            imgSrc: img13,
            title: "Foragescape Farm"
        },
        {
            id: 14,
            imgSrc: img14,
            title: "I spy..."
        },
        {
            id: 15,
            imgSrc: img15,
            title: "Bee of Mine"
        },
        {
            id: 16,
            imgSrc: img16,
            title: "Friendship"
        },
        {
            id: 17,
            imgSrc: img17,
            title: "Magic of Books"
        },
        {
            id: 18,
            imgSrc: img18,
            title: "Happy Holidays"
        },
        {
            id: 20,
            imgSrc: img20,
            title: "Two Sweet"
        },
        {
            id: 23,
            imgSrc: img23,
            title: "Oblivion"
        },
        {
            id: 25,
            imgSrc: img25,
            title: "Moss"
        },
        {
            id: 27,
            imgSrc: img27,
            title: "Girls and Curls"
        }
    ];

    const [photo, setPhoto] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [title, setTitle] = useState('');
    // const [selected, setSelected] = useState('');
    const getImg = (imgSrc) => {
        // console.log(imgSrc);
        setTempImgSrc(imgSrc);
        setPhoto(true);
        setTitle(title);
    }
    // const [rating, setRating] = useState();

    return (
      <>
        <h2 className="welcome">
          “A good snapshot keeps a moment that's gone from running away.”
        </h2>
        <p className="quote">– Eudora Welty</p>

        <div className={photo ? "photo open" : "photo"}>
          <FaWindowClose onClick={() => setPhoto(false)} />

          <img src={tempImgSrc} alt="" />

            {data.map((item) => {
              return (
                <p className="title" key={item.id}>
                  {item.title}
                </p>
              );
            })}


          {/* <div>{data[selected] && data[selected].title}</div>
            {data.map((item, index) => {
                return (
                    <>
                    <p 
                    className={index === selected ? "selected" : ""} 
                    key={`${index}${item.title}`}
                    onClick={() => setSelected(index)}
                    ></p>
                    </>
                )
            })}
          </div> */}
        </div>

        <div className="gallery">
          {data.map((item) => {
            return (
              <div
                className="img"
                key={item.id}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </>
    );
}

export default Gallery;