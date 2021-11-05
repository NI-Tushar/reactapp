import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css'

import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jpg'
import img3 from '../images/image3.jpg'


const Slider = () =>{
  return(
    <Carousel variant="light">
  <Carousel.Item>
    <img className="img d-block w-100"
      src={img1}
      alt="First slide"
      />
    <div className="image-slide">
    <Carousel.Caption>
      <h5>Buy Gmail Account</h5>
      <p>Buy verified Gmail Accounts and social media Accounts at affordable prices.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Social Media Services</h5>
      <p>Best service in reasonable price, you came to the right place</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Buy Amazon account and Google Voice</h5>
      <p>Buy verified Amazon Accounts and Google Voice Account at affordable prices.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
export default Slider;