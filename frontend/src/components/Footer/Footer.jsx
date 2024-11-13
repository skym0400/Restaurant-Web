import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div  data-aos="fade-down"className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                #43,3rd Main ,Virgo Nagar,Post <br /> Seeghalli,Bengaluru,
                Karnataka 560043
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>healthy@meal.com</p>
                <p>healthy@food.com</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p>+91574834233 - Sales & Services</p>
                <p>+91574834234 - Hiring Queries</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-4 items-center">
            <p>
                @ 2024 TCJ, All rights reserved
            </p>
            <div className="flex items-center gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
