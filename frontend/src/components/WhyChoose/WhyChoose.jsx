import React from "react";
import { FaBus } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container">
          <h1 data-aos="fade" className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
            Why Choose Us
          </h1>
          <div data-aos="fade" data-aos-delay="300" >
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                  ....
                </p>
                <FaBus className="text-5xl text-primary" />
              </div>

              <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
                <FaBus className="text-5xl text-secondary" />
                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                  ....
                </p>
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                  ....
                </p>
                <FaBus className="text-5xl text-primary" />
              </div>

              <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
                <FaBus className="text-5xl text-secondary" />
                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                  ....
                </p>
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
