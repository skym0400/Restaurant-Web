import React from 'react';
import BgPolygon from "../../assets/polygon.png";
import { FaUser } from 'react-icons/fa6';
import Vector from "../../assets/vector-wave.png"

const BgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
  };
  

const About = ({ HandlePopup }) => {
  return <>
     <div style={BgStyle} className='py-14'>
        <div className="container min-h-[500px] relative z-10">
            <h1 data-aos="fade" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>
                About Us</h1>

                <div data-aos="fade" data-aos-delay="300" className='bg-white/80 p-10 my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro repellendus velit repellat animi deserunt voluptas repudiandae! Molestias similique impedit quidem itaque reprehenderit. Perspiciatis earum veniam atque iusto corporis distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur consequuntur natus quaerat veritatis, reiciendis deserunt asperiores non voluptatem itaque!
                <div data-aos="fade-up" className='pt-10 flex justify-center'> 
                <button onClick={HandlePopup} className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300" >
                  <FaUser />
                  My Account
                  </button>
                </div>
                </div>
        </div>
            <div className='absolute top-0 right-0 w-full'>
                <img src={Vector} alt="" className='mx-auto' />
            </div>
    </div>
    </>
  
}

export default About