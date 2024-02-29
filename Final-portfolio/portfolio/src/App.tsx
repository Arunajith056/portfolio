import { MovingBorderDemo } from "./components/button";
import { FloatingNavDemo } from "./components/nav-bar";
import { CardStackDemo } from "./components/card";
import { CardHoverEffectDemo } from "./components/hover";
import FixedCircle from "./components/link";
import Profile from "./components/profile";
import CircleCards from "./components/scroll";
import { TypewriterEffectSmoothDemo } from "./components/text-effect";

import { WavyBackgroundDemo } from "./components/wave";

import "./App.css";

export function App() {
  return (
    <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <WavyBackgroundDemo></WavyBackgroundDemo>

      {/* home start  */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0" id="home">
        <nav>
          <FloatingNavDemo />
        </nav>
        <main>
          <TypewriterEffectSmoothDemo />
          {/* home end  */}
          {/* about start  */}
          <h1
            className="text-4xl md:text-7xl  font-bold text-center line-clamp-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
            id="about"
          >
            Hi ! there <span className=" text-yellow-300 ">👋</span>
            <br /> My Name is{" "}
            <span className="!text-blue-200">
              Ajith
              <span className="!text-blue-300">
                Kum<span className=" text-blue-400">a</span>
                <span className="text-blue-500">r.</span>
              </span>
            </span>
          </h1>
          <Profile />
          <p className="mt-4  text-base text-white max-w-xl text-center mx-auto font-semibold opacity-50">
          "Bringing 1.2 years of hands-on experience in web development, I specialize in crafting dynamic, responsive, and user-centric web applications. My expertise spans a broad range of front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Python. I'm deeply committed to continuous learning, constantly updating my skills to keep pace with the latest industry trends. My passion for technology and dedication to enhancing user experiences drive me to deliver high-quality, innovative web solutions."
          </p>

          <CircleCards />
        </main>
        {/* about end  */}
        <div className="my-9 text-bule-100 opacity-10 font-bold text-center">
          {" "}
          <hr />
        </div>
        {/* work start  */}
        <article id="work">
          <div className="text-5xl grid place-items-center opacity-80">
            <h1 className=" text-gray-200 font-bold font-san">Projects</h1>
          </div>
          <CardHoverEffectDemo />
          <div className="text-5xl grid place-items-center opacity-80">
            <h1 className=" text-gray-200 font-bold font-san">My Experience</h1>
            <div className=" w-0.5 h-32 bg-gray-500 mt-3"></div>
          </div>
          <CardStackDemo />
        </article>
        {/* work end  */}
        {/* resume start  */}
        <section>
          <div className="grid place-items-center mt-20" id="resume">
            <MovingBorderDemo />
          </div>
          {/* resume end  */}
          <div className="my-9 text-bule-100 opacity-10 font-bold text-center">
            {" "}
            <hr />
          </div>
          <FixedCircle />
          {/* contact start  */}
          <div
            className="grid place-items-center text-blue-100 font-bold"
            id="contact"
          >
            <h1>Contact</h1>
            <p className="mt-5 text-gradient text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              LET'S WORK TOGETHER
            </p>
            <a href="mailto:arunajith056@gmail.com">
              <button className="wow-button mt-10">Sign me up</button>
            </a>
          </div>
        </section>
        {/* contact end  */}
        <div className="my-9 text-bule-100 opacity-10 font-bold text-center">
          {" "}
          <hr />
        </div>
        <footer>
          <div className="text-white place-items-start text-sm inline-grid">
            <h1>
              Made with by<span> ❤️ </span>AJ
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
}
