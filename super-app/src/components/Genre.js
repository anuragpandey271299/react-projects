import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Genre.css';

import action from './images/action.png'
import drama from './images/drama.png'
import fantasy from './images/fantasy.png'
import fiction from './images/fiction.png'
import horror from './images/horror.png'
import thriller from './images/thriller.png'

export default function Genre() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const handleImageClick = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };
  const navigate = useNavigate();

  const NextPage=()=>{
    if(selectedImages.length<3){
        setErrorMessage('Select atleast 3')
    }else{
        navigate("/registration");
    }
    
  }

  return (
    <div className="wrapperGenre">
      <div>
        <h1>Super app</h1>
        <h2>Choose your entertainment category</h2>
        <p>{errorMessage}</p>
      </div>
      <div className="genreFilm">
        <img
          id="action"
          src={action}
          className={selectedImages.includes("action") ? 'selected' : ''}
          onClick={() => handleImageClick("action")}
        />
        <img
          id="drama"
          src={drama}
          className={selectedImages.includes("drama") ? 'selected' : ''}
          onClick={() => handleImageClick("drama")}
        />
        <img
          id="thriller"
          src={thriller}
          className={selectedImages.includes("thriller") ? 'selected' : ''}
          onClick={() => handleImageClick("thriller")}
        />
        <br />
        <img
          id="horror"
          src={horror}
          className={selectedImages.includes("horror") ? 'selected' : ''}
          onClick={() => handleImageClick("horror")}
        />
        <img
          id="fantasy"
          src={fantasy}
          className={selectedImages.includes("fantasy") ? 'selected' : ''}
          onClick={() => handleImageClick("fantasy")}
        />
        <img
          id="fiction"
          src={fiction}
          className={selectedImages.includes("fiction") ? 'selected' : ''}
          onClick={() => handleImageClick("fiction")}
        />
      </div>
      <button onClick={NextPage}>Next Page</button>
    </div>
  );
}
