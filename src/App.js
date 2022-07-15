import { useEffect, useState } from "react";
import Fullpage, {
  FullpageNavigation,
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import "./app.css";
import "./circle.css";
import "./bubble.css";
import { ReactComponent as IconArrow } from "./images/arrow_icon.svg";
import { ReactComponent as IconnIstagram } from "./images/icon_instagram.svg";
import { ReactComponent as IconLinkedin } from "./images/icon_linkedin.svg";
import Parallax from "parallax-js";
import project1 from "./images/desktop-preview.jpg";
import project2 from "./images/preview.jpg";
import Navbar from "./navbar";
import Section from "./Section";
import about_img_desk from "./images/bg-about-mobile_1.png";
import project_img_desk from "./images/bg-project-desktop.png";
import contact_img_desk from "./images/bg-touch-desktop.png";
import about_img_mob from "./images/bg-about-desktop.png";
import project_img_mob from "./images/bg-project-mobile_1.png";
import contact_img_mob from "./images/bg-touch-mobile.png";
import Project from "./Project";
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.onresize = () => {
    const background = document.getElementById("background");
    setScreenWidth(background.offsetWidth);
  };

  useEffect(() => {
    if (window.innerWidth >= screenWidth) {
      const circleParallax = new Parallax(document.getElementById("circle"));
      if (document.getElementById("bubble") == undefined) return;
      const bubbleParallax = new Parallax(document.getElementById("bubble"));
      return;
    }
  });
  // useEffect(() => {
  //   let previewsScroll = 0;

  //   window.onscroll = function (e) {
  //     const gap = previewsScroll - window.scrollY;

  //     switch (window.location.hash) {
  //       case "#about":
  //         console.log("about");
  //         if (gap > 300) {
  //           window.location.hash = "#home";
  //           previewsScroll = window.scrollY;
  //         }
  //         if (gap < -300) {
  //           window.location.hash = "#project";
  //           previewsScroll = window.scrollY;
  //         }
  //         break;
  //       case "#project":
  //         console.log("project");
  //         if (gap > 300) {
  //           window.location.hash = "#about";

  //           previewsScroll = window.scrollY;
  //         }
  //         if (gap < -300) {
  //           window.location.hash = "#contact";
  //           previewsScroll = window.scrollY;
  //         }
  //         break;
  //       case "#contact":
  //         console.log("contatc");
  //         if (gap > 300) {
  //           window.location.hash = "#project";
  //           previewsScroll = window.scrollY;
  //         }
  //         break;
  //       default:
  //         console.log("home");
  //         if (gap < -300) {
  //           window.location.hash = "#about";
  //           previewsScroll = window.scrollY;
  //         }
  //     }
  //   };
  // });

  return (
    <div className="App   ">
      <div
        id="background"
        className="fixed bg-wrapper z-[-100] w-screen h-screen"
      >
        <div className="   w-screen h-screen bg-gradient-to-b from-[#00B4DB] to-[#0083B0]">
          {screenWidth >= 1280 && (
            <div id="bubble" className="bubble_container   ">
              <div
                data-depth="-0.7"
                id="bubble_1"
                className="bubble_element"
              ></div>
              <div
                data-depth="-0.7"
                id="bubble_2"
                className="bubble_element"
              ></div>
              <div
                data-depth="-0.3"
                id="bubble_3"
                className="bubble_element"
              ></div>
              <div
                data-depth="-0.3"
                id="bubble_4"
                className="bubble_element"
              ></div>
              <div
                data-depth="-0.4"
                id="bubble_5"
                className="bubble_element"
              ></div>
              <div
                data-depth="-0.7"
                id="bubble_6"
                className="bubble_element"
              ></div>
            </div>
          )}

          <div
            id="circle"
            className="absolute top-[-31vw] lg:top-[-147px] left-[-60vw] lg:left-[-100px] "
          >
            <div
              data-depth="0.4"
              className="circle_wrapper w-[160vw] lg:w-[1128px] h-[160vw] lg:h-[1128px] "
            >
              <div id="circle_1" className="circle_element"></div>
              <div id="circle_2" className="circle_element"></div>
              <div id="circle_3" className="circle_element"></div>
              <div id="circle_4" className="circle_element"></div>
            </div>
          </div>
        </div>
      </div>

      <Navbar></Navbar>
      <div className="as-container grid grid-flow-col">
        <section
          id="home"
          className="section inline-block lg:block text-right z-50 relative h-screen w-screen"
        >
          <h1 className="text-[64px] lg:text-[200px] font-black absolute left-[20px] lg:left-0 top-[30vw] lg:top-[250px] block lg:max-w-[87rem] lg:w-full lg:pr-[30px] ">
            welcome
          </h1>
          <div className="lg:hidden absolute bottom-[30px] right-0 w-[150px] border-b-2 font-light pb-[3px] text-left ">
            swipe right
          </div>
          <div className="hidden lg:block absolute bottom-0 right-[-20px] origin-bottom-left border-b-2 w-[200px]  -rotate-90 tracking-[.3rem] text-right ">
            sroll down
          </div>
        </section>
        <Section
          id="about"
          deskImage={about_img_desk}
          image={about_img_mob}
          title="about me"
        >
          <div className=" w-full lg:pr-[50px] md:mt-[100px]  flex lg:block lg:mt-[300px]  items-center justify-center h-full">
            <div className="lg:mx-auto border  w-fit ">
              <p className=" sm:text-black md:text-white md:bg-[#7c7000c2] md:p-[20px] lg:font-medium lg:bg-transparent text-center w-[257px] md:w-fit lg:text-left  md:text-[24px] mb-[30px] ">
                Hi , nama saya idpan. <br /> saya seorang front end programmer
              </p>
              <button className="text-white block  lg:text-[24px] w-fit h-fit lg:mx-0 md:mx-auto border uppercase font-bold py-3 px-12 tracking-[10px] bg-gradient-to-r to-[#FCCF08] from-[#E09D00] ">
                more
                <IconArrow className="ml-[20px] inline-block [&_path]:stroke-[#7a5705] " />
              </button>
            </div>
          </div>
        </Section>
        <Section
          id="project"
          deskImage={project_img_desk}
          image={project_img_mob}
          title="projects"
        >
          <div className="lg:pr-[50px] px-[30px]   2xl:pr-[100px] border  w-screen lg:px-[100px] lg:ml-[-500px] flex center  ">
            <div className=" project-bg mx-auto lg:flex flex-nowrap gap-x-[100px] overflow-scroll  lg:mt-[150px] w-full lg:mr-[100px] lg:h-fit h-[300px]   p-4  ">
              <Project image={project1} />
              <Project image={project2} />
              <Project image={project1} />
              <Project image={project2} />
            </div>
            {/* <button className="block w-[100px] h-[50px] right-0  bg-black absolute  bottom-[50%] ">
            next
          </button> */}
          </div>
        </Section>
        <Section
          deskImage={contact_img_desk}
          imgClass="lg:w-[600px]"
          id="contact"
          image={contact_img_mob}
          title="get in touch"
        >
          <div className="  w-full lg:pr-[50px] md:mt-[100px] lg:ml-[350px] flex lg:block lg:mt-[300px]  items-center justify-center h-full">
            <div className=" sm:bg-[#0099ff96] md:bg-transparent  px-[30px] py-[50px] ">
              <p className="font-bold md:text-[32px] mb-[20px] lg:mb-[30px] ">
                idpanashari813@gmail.com
              </p>
              <div className=" text-center lg:text-left">
                <a
                  className="inline-block mr-[20px] md:mr-[40px]"
                  href="https://www.instagram.com/idpanashari/"
                  target="_blank"
                >
                  <IconnIstagram />
                </a>
                <a
                  target="_blank"
                  className="inline-block"
                  href="https://www.linkedin.com/in/idpan-ashari-2b2547230/"
                >
                  <IconLinkedin />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
