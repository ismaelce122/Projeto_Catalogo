import React from 'react';
import './carrossel.css';

const ImageCarousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src='https://www.telefonica.de/file/public/1090/Logo-MediaMarkt-Super-Select-850x478.jpg'width='50' alt=".."/>
      </div>
      <div className="carousel-item">
        <img src='https://t2.tudocdn.net/726651?w=1920' width='50' alt="..."/>
        <p></p>
      </div>
      <div className="carousel-item">
        <img src='https://http2.mlstatic.com/D_NQ_NP_2X_835942-MLB79588377248_102024-F.webp' width='50' alt="..."/>
      </div>
      <div className="carousel-item">
        <img src='https://img.global.news.samsung.com/br/wp-content/uploads/2017/11/1-6_peq_705_nova.png' width='50' alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default ImageCarousel;
