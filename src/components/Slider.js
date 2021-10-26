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
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
export default Slider;