import { Link } from "react-router-dom";
import Earth from "./Images/earth.png";
import Mars from "./Images/mars.png";
// import Venus from "./Images/venus.png";
// import Jupiter from "./Images/jupiter.png";
// import Saturn from "./Images/saturn.png";
import message2 from "./Images/message2.jpg";

export default function Nav() {
  let planets = [
    {
      name: "Earth",
      image: Earth,
      message: "Projects",
      location: { top: 1 / 6, right: 1 / 7 },
    },
    {
      name: "Mars",
      image: Mars,
      message: "About",
      location: { top: 1 / 6, right: 4 / 5 },
    },
    // { name: "Venus", image: Venus, message: "Contact" },
    // { name: "Jupiter", image: Jupiter, message: "Blog" },
    // { name: "Saturn", image: Saturn, message: "Gallery" },
  ];

  return (
    <div className="relative w-full h-screen" id="nav-page">
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={message2}
            alt="Background"
            className=" object-cover relative"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-7 text-xl text-white">
            <h1 className="">Greetings from the Solar System, Astronauts!</h1>
            <p>Welcome to my portfolio. Click on the planets to explore. </p>
          </div>
        </div>
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
            />
            <div className="project-message">{planet.message}</div>
          </div>
        ))}

        <div className="absolute bottom-10 right-10">
          <Link to="/">
            <button
              className="text-white rounded border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
              style={{ padding: "7px 20px" }}
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
