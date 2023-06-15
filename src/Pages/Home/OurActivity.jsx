import React from 'react';
import Lottie from "lottie-react";
import UseSectionHeader from '../Hooks/useSectionHeader';
import Bus from "../../assets/Animation/summerCamp2.json"
import fire from "../../assets/Animation/summerCamp1.json"
import song from "../../assets/Animation/sign2.json"
import { motion } from "framer-motion"

const OurActivity = () => {
    return (
        <div>
            <UseSectionHeader title={"Our Activity"}/>

           <div>
             <h2 className="text-2xl text-center text-orange-500 font-serif">Our Bus Journey</h2>
             <div className='divider w-1/2 mx-auto'></div>
           <div className='grid lg:grid-cols-2'>
             <motion.p drag> <Lottie animationData={Bus}   loop={true} /></motion.p>
             <div>
             <div className="card  mt-32 bg-neutral text-neutral-content font-serif">
  <div className="card-body items-center text-center">
     <p>Embarking on the summer camp bus journey fills the air with anticipation and excitement. The sun's warm rays embrace the bus, as laughter and chatter fill its vibrant interior. Through the windows, the scenic landscapes pass by in a blur, painting a picturesque backdrop for unforgettable memories. With each mile, friendships deepen, and the spirit of adventure takes hold. As the bus rolls closer to the destination, hearts brim with anticipation, eager to embark on a summer camp adventure filled with endless possibilities.</p>
  </div>
  </div>
             </div>
            </div>
           </div>
           <div>
             <h2 className="text-2xl text-center text-orange-500 font-serif">Our Fire Festival</h2>
             <div className='divider w-1/2 mx-auto'></div>
           <div className='grid lg:grid-cols-2 '>
             
             <div>
             <div className="card  mt-32 bg-neutral text-neutral-content font-serif">
  <div className="card-body items-center text-center">
     <p>
The summer camp fire festival ignites the night with flickering flames and a contagious energy. Gathered around the roaring fire, campers' faces glow with excitement and anticipation. The crackling logs cast a warm and comforting glow, while the rhythmic beat of drums sets the tone for the festivities. Dancing shadows and soaring sparks create a magical ambiance, captivating everyone's senses. In this enchanting atmosphere, bonds are forged, stories are shared, and the spirit of camaraderie burns brightly, creating lifelong memories of the summer camp fire festival.</p>
  </div>
  </div>
             </div>
             <motion.p  drag> <Lottie animationData={fire}   loop={true} /></motion.p>
            </div>
           </div>
           <div>
             <h2 className="text-2xl text-center text-orange-500 font-serif">Our Bus Journey</h2>
             <div className='divider w-1/2 mx-auto'></div>
           <div className='grid lg:grid-cols-2'>
             <motion.p  drag> <Lottie animationData={song}   loop={true} /></motion.p>
             <div>
             <div className="card  mt-40 bg-neutral text-neutral-content font-serif">
  <div className="card-body items-center text-center">
     <p>Embarking on the summer camp bus journey fills the air with anticipation and excitement. The sun's warm rays embrace the bus, as laughter and chatter fill its vibrant interior. Through the windows, the scenic landscapes pass by in a blur, painting a picturesque backdrop for unforgettable memories. With each mile, friendships deepen, and the spirit of adventure takes hold. As the bus rolls closer to the destination, hearts brim with anticipation, eager to embark on a summer camp adventure filled with endless possibilities.</p>
  </div>
  </div>
             </div>
            </div>
           </div>
            
        </div>
    );
};

export default OurActivity;