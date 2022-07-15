import { useEffect } from "react";
import "./toggle.css";
export default function Navbar(props) {
  return (
    <nav className=" cursor-pointer top-0  px-[20px] pt-[20px] lg:px-[100px] lg:pt-[20px] fixed z-[100] w-screen  flex justify-between ">
      <a href="home" className=" font-black">
        idpan
      </a>
      <a id="navAbout" href="#about">
        about
      </a>
      <a id="navProject" href="#project">
        project
      </a>
      <a id="navContact" href="#contact">
        contact
      </a>
      <input id="toggle_menu" type="checkbox" className="peer hidden" />
      <label htmlFor="toggle_menu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="absolute hidden">
        <a href="about">about</a>
        <a href="project">project</a>
        <a href="contact">contact</a>
      </div>
    </nav>
  );
}
