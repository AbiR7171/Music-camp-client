import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Lottie from "lottie-react";
import banner1 from "../../assets/Banner1.jpg"
import banner2 from "../../assets/Banner2.jpg"
import banner3 from "../../assets/Banner3.jpg"
import animation1 from "../../assets/Animation/banner1.json"
import animation2 from "../../assets/Animation/banner2.json"


const Banner = () => {
    return (
        <div className='text-center'>
             <Carousel >
                <div>
                    <img src={banner2} />
                   <p className='-mt-72'>
                   <Lottie animationData={animation1}  loop={true} />
                   </p>
                   <p className='absolute right-0 me-40 top-0 mt-72'>
                   <Lottie animationData={animation2} className='w-52' loop={true} />
                   </p>
                   
                </div>
                <div>
                    <img src={banner1} />
                    <p className='-mt-72'>
                   <Lottie animationData={animation1}  loop={true} />
                   </p>
                   <p className='absolute right-0 me-28 top-0 mt-24'>
                   <Lottie animationData={animation2} className='w-52' loop={true} />
                   </p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className='-mt-72'>
                   <Lottie animationData={animation1}  loop={true} />
                   </p>
                   <p className='absolute right-0 me-28 top-0 mt-24'>
                   <Lottie animationData={animation2} className='w-52' loop={true} />
                   </p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};
export default Banner;