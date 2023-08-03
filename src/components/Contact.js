import React from 'react';
import BannerImage from '../assets/fast3.jpg';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>

          <div className='order'> 
                <Link to ="/" >
                    <button >GÖNDER</button>
                </Link> 
              </div>
        </form>
      </div>
    </div>
  );
};
