import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/Banner1.jpg"
import banner2 from "../../assets/Banner2.jpg"
import banner3 from "../../assets/Banner3.jpg"

const Banner = () => {
    return (
        <div className='text-center'>
             <Carousel >
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
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