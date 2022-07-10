import React from "react";
import "./Presentation.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Background from "../Background";


export default function Presentation() {
  return (
    <div>
      <Background />
      <div className="presentation">
        <div className="presentation-text">
          <div className="resume-text">
            <h1 className="paragraphe-headline">Mamadou SY</h1>
            <h3 className="paragraphe-txt">
              Étudiant en première année de développement web à la Web@cademie
              d'EPITECH à Lyon.
            </h3>

            <div className="logo">
              <a href="https://www.linkedin.com/in/mamadou-sy/" target="_blank">
                <img className="logos" src={linkedin} alt="" />
              </a>
              <a href="https://github.com/Mams-sy" target="_blank">
                <img className="logos" src={github} alt="" />
              </a>
            </div>
          </div>
            <div className="button">
          <a href="#propos"><IoIosArrowDropdownCircle className="dropdown-button" /></a>

            </div>
        </div>
      </div>
    </div>
  );
}
