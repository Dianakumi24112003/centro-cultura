import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-100"
          src="./imagen/img.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block mx-auto w-100"
          src="./imagen/img2.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-100"
          src="./imagen/img3.webp"
          alt="Trece slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselComponent;
