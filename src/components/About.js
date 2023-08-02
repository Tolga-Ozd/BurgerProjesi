import React from 'react';
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return(
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}></div>

      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magni cupiditate in nulla, est dolores praesentium quis, necessitatibus, ab delectus doloribus consectetur repellendus quia quidem a. Dolorum exercitationem deserunt eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor error neque esse tempore voluptatem ad provident porro facere dolorum?</p>
      </div>
   </div>
  );
};
