import React from "react";
import pixelArtVideo from "./Images/background.mp4";
import messageImg from "./Images/message.png";
import envelope from "./Images/1.png";
import Marks from "./Images/mark.png";

export default function Intro() {
  function handleClick() {
    const whiteElement = document.getElementById("white");
    let whiteWidth = 0;
    let whiteHeight = 0;
    whiteElement.style.display = "block";
    const interval = setInterval(() => {
      if (whiteWidth < window.innerWidth) {
        whiteWidth = Math.min(
          window.innerWidth,
          whiteWidth + Math.ceil((window.innerWidth - whiteWidth) / 10)
        );
        whiteElement.style.width = `${whiteWidth}px`;
      }
      if (
        whiteWidth === window.innerWidth &&
        whiteHeight < window.innerHeight
      ) {
        whiteHeight = Math.min(
          window.innerHeight,
          whiteHeight + Math.ceil((window.innerHeight - whiteHeight) / 10)
        );

        whiteElement.style.height = `${whiteHeight}px`;
      }
      if (
        whiteWidth === window.innerWidth &&
        whiteHeight === window.innerHeight
      ) {
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById("welcome").classList.remove("hidden");
        }, 700);
      }
    }, 1);
  }

  function anotherpage() {
    window.location.href = "/nav";
  }

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
        <video autoPlay loop muted className="w-full">
          <source src={pixelArtVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative w-full h-full z-20 flex items-center justify-center">
        <div className="w-full h-full absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={messageImg}
            alt="Message"
            className="w-full h-full object-cover z-100"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
          <div className="w-210 h-50 text-center text-white rounded-lg flex flex-col items-center justify-between">
            <div className="text-xl">
              <p className=" animate">
                Commander, mission update: A priority message has landed.
              </p>
              <p className="animate2">
                Open the envelope to unlock my portfolio and start your journey.
              </p>
            </div>
            <div className="relative">
              <img
                className="w-25 h-13"
                src={envelope}
                onClick={handleClick}
              ></img>
              <img src={Marks} className="absolute -top-2 right-2 w-7 z-20" />
            </div>
          </div>
        </div>

        <div
          id="white"
          className="fixed top-1/2 left-1/2 hidden w-1 h-1 z-30 bg-white opacity-100 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-linear duration-500"
        ></div>

        <div
          id="welcome"
          className="hidden w-full h-full z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          onClick={anotherpage}
        >
          <div className="w-320 h-45 flex flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl font-bold text-black mb-20 leading-10">
              Welcome to my portfolio — a space where creativity and code come
              together. Like a great game, each project is a new level unlocked,
              combining problem-solving, innovation, and passion. Explore my
              work and see what I’ve been building!
            </h1>

            <p className="text-xl mt-4 text-grey">
              Click anywhere to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
