import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Footer from './components/Footer'

import './Homepage.css';


const Homepage=()=>{
 
    // const all_desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
    
    return (
        <>
           <div className="img-slider">
               <div className="blank-1">
               </div>
               <div className="slide">
                <Slider />
               </div>
               <div className="blank-2">
               </div>
           </div>

           <div className="product-card">
               <div className="blank-1">
               </div>
               <div className="card">
                   <Cards/>
               </div>
               <div className="blank-2">
               </div>
           </div>

           <div className="footer">
               <div className="blank-1">
               </div>
               <div className="footer-bar">
                <Footer />
               </div>
               <div className="blank-2">
               </div>
           </div>           
       </>
    )
}
export default Homepage;

