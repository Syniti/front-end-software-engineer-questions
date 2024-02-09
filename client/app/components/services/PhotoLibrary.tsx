'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PhotoLibraryProps {
  photos: string[];
}

const PhotoLibrary: React.FC<PhotoLibraryProps> = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Photo Library</h2>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoLibrary;
