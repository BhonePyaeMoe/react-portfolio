import { Link } from "react-router-dom";
import Earth from "./Images/earth.png";
import Mars from "./Images/mars.png";
import Neptune from "./Images/neptune.png";
import Jupiter from "./Images/jupiter.png";
import Saturn from "./Images/saturn.png";
import message2 from "./Images/message2.jpg";
import help from "./Images/help.png";
import speaker from "./Images/speaker.png";
import speaker2 from "./Images/speaker2.png";
import music from "./Images/music.mp3";

export default function Nav() {
  const handlecloseclear = () => {
    const clearElement = document.getElementById("clear");
    const audio = document.getElementById("music");
    const speaker2Element = document.querySelector(".speaker2");
    clearElement.style.display = "none";
    if (speaker2Element.classList.contains("hidden")) {
      audio.play();
    }
  };

  const handleopenclear = () => {
    const clearElement = document.getElementById("clear");
    clearElement.style.display = "block";
    audio.pause();
  };

  const speakercontrol = () => {
    const speakerElement = document.querySelector(".speaker");
    const speaker2Element = document.querySelector(".speaker2");
    const audio = document.getElementById("music");
    if (speakerElement.classList.contains("hidden")) {
      speakerElement.classList.remove("hidden");
      speaker2Element.classList.add("hidden");
      audio.play();
    } else {
      speakerElement.classList.add("hidden");
      speaker2Element.classList.remove("hidden");
      audio.pause();
    }
  };

  const home = () => {
    const navpage = document.getElementById("nav-page");
    const elements = navpage.getElementsByTagName("*");
    for (const element of elements) {
      element.style.opacity = "0";
      element.style.transition = "opacity 1s ease-in-out";
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 700);
  };

  let planets = [
    {
      name: "Earth",
      image: Earth,
      message: "Projects",
      location: { top: 1 / 6, right: 1 / 7 },
      link: "/projects",
    },
    {
      name: "Mars",
      image: Mars,
      message: "About",
      location: { top: 1 / 6, right: 4 / 5 },
      link: "/about",
    },
    {
      name: "Neptune",
      image: Neptune,
      message: "Contact",
      location: { top: 1 / 2, right: 1 / 2 },
      link: "/contact",
    },
    {
      name: "Jupiter",
      image: Jupiter,
      message: "Skills",
      location: { top: 3 / 5, right: 5 / 7 },
      link: "/skills",
    },
    {
      name: "Saturn",
      image: Saturn,
      message: "Gallery",
      location: { top: 1 / 7, right: 1 / 2 },
      link: "/gallery",
    },
  ];

  return (
    <div className="relative w-full h-screen" id="nav-page">
      <audio className="hidden" id="music" autoPlay loop>
        <source src={music} type="audio/mp3" />
      </audio>

      <div className="absolute top-0 left-0 w-full h-full z-20" id="clear">
        <div
          className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2"
          onClick={handlecloseclear}
        >
          <img
            src={message2}
            alt="Background"
            className=" object-cover relative"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-7 text-xl text-white">
            <h1 style={{ paddingTop: "100px" }} className="">
              Greetings from the Solar System, Astronauts!
            </h1>
            <p>Welcome to my portfolio. Click on the planets to explore. </p>
            <p style={{ paddingTop: "100px" }}>Click to continue . . . . </p>
          </div>
        </div>
      </div>

      <div className="absolute top-5 right-0 z-50">
        <img src={help} alt="help" className="w-20" onClick={handleopenclear} />
      </div>

      <div className="absolute top-5 right-23 z-50">
        <img
          src={speaker}
          alt="speaker"
          className="w-12 speaker "
          onClick={speakercontrol}
        />
      </div>

      <div className="absolute top-5 right-23 z-50 ">
        <img
          src={speaker2}
          alt="speaker2"
          className="w-12 hidden speaker2 "
          onClick={speakercontrol}
        />
      </div>

      <div className="relative top-0 left-0 w-full h-full z-10 bg-white move">
        {planets.map((planet, index) => (
          <div key={index}>
            <img
              src={planet.image}
              alt={planet.name}
              className="w-30 absolute planet"
              style={{
                top: planet.location?.top
                  ? `calc(${planet.location.top} * 100%)`
                  : undefined,
                right: planet.location?.right
                  ? `calc(${planet.location.right} * 100%)`
                  : undefined,
                position: "absolute",
              }}
              onClick={() => {
                window.location.href = planet.link;
              }}
            />
            <div className="project-message">{planet.message}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-10 z-50">
        <button
          className="text-white rounded border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 "
          style={{ padding: "7px 20px" }}
          onClick={home}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
