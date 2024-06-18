import deepakKumar from "../assets/PROFESSIONAL.jpg";
import deepakName from "../assets/deepak-name1.png";
import playBtn from "../assets/playButton.png";
import Navbar from "./Navbar";
import smallSplash from "../assets/splash-small.png";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const animationDelay = 8; // Delay in seconds

    const textElements = document.querySelectorAll(".reveal-text");
    const lineElement = document.querySelector(".reveal-line");
    const imageElement = document.querySelector(".reveal-image");

    gsap.set(textElements, { opacity: 0, y: 50 });
    gsap.set(lineElement, { opacity: 0, width: 0 });
    gsap.set(imageElement, { opacity: 0, scale: 1 }); // Initial larger scale

    const timeline = gsap.timeline({ delay: animationDelay });

    timeline.to(lineElement, {
      opacity: 1,
      width: "100px",
      duration: 0.5,
    });

    timeline.to(imageElement, {
      opacity: 1,
      scale: 1, // Animate to original size
      duration: 0.3,
    });

    timeline.to(imageElement, {
      scale: 1.2, // Scale up to 20% larger than original size
      duration: 0.3,
    });

    timeline.to(imageElement, {
      scale: 1, // Scale back to original size
      duration: 0.3,
      onComplete: () => {
        // Animation onComplete callback
        textElements.forEach((textElement, index) => {
          gsap.to(textElement, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.5,
          });
        });
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="bg-white md:px-8 select-none font-baijam border-b-2 h-[calc(100vh-3.5rem)] w-full flex flex-col md:flex-row lg:justify-center"
      >
        <div className="  relative flex flex-col justify-center md:mt-14 min-h-full  lg:max-w-[50%] px-16">
          <img
            src={smallSplash}
            className="absolute  hidden md:block top-20 left-0 rotate-45 w-14 reveal-text"
            alt="splash"
          />
          <div className="w-16 h-[2px] bg-black mb-2 reveal-line"></div>
          <span className="text-black text-3xl font-semibold reveal-text">
            <span className="text-primaryGreen mb-11 inline-block">Hello,</span>{" "}
            I am
          </span>
          <div>
            <img src={deepakName} className="mb-2 reveal-text" alt="name" />
          </div>
          <span className="text-secondary text-2xl font-medium tracking-[6px] inline-block reveal-text">
            A WEB DEVELOPER FROM
            <span className="text-primaryGreen text-3xl font-semi-bold">
              {" "}
              INDIA.
            </span>
          </span>
          <div className="flex items-center space-x-3 mt-6  reveal-text">
            <img src={playBtn} alt="play" className="w-16" />
            <span className="text-black text-[0.8rem] font-bold tracking-[10px] uppercase">
              see my work profile
            </span>
          </div>
          <div className="flex flex-col mt-28">
            <span className="uppercase font-bold text-xs tracking-[10px] text-gray-700 mb-3 reveal-text">
              contact me
            </span>
            <span className="font-semibold text-xs reveal-text">
              Email:{" "}
              <span className="text-primaryGreen font-normal reveal-text">
                deepakrajput058@gmail.com
              </span>
            </span>
            <span className="font-semibold text-xs reveal-text">
              Contact Number:{" "}
              <span className="text-primaryGreen font-normal reveal-text">
                +91 8210117824
              </span>
            </span>
          </div>
        </div>
        <div className=" h-full lg:flex p-8 relative hidden">
          <img
            src={deepakKumar}
            alt="deepak-kr"
            className=" w-full object-cover reveal-image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
