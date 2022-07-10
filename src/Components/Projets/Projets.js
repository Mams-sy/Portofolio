import React from "react";
import "./Projets.css";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import photomyquizz from "../../assets/myquizz.png";
import photosnap from "../../assets/snap.png";
export default function Projets() {
  return (
    <div id="projets">
      <div className="projets">
        <div className="projets-header">
          <div>
            <AiOutlineFundProjectionScreen className="projets-logo" />
          </div>
          <div>
            <h1 className="projets-title">Mes Projets</h1>
          </div>
        </div>

        <div className="projets-content">
          <div className="projets-text">
            <h1 className="projets-titre">My Quizz</h1>
          </div>
          <div className="projets-img">
            <a href="https://github.com/Mams-sy/My_Quizz" target="_blank"><img className="img" src={photomyquizz} alt="photo" /></a>
          </div>
          <div className="projets-description">
            <p className="projets-description-content">
              Clone du site Quizz.fr
            </p>
            <p className="projets-description-content-language">
              Languages : PHP, SYMFONY
            </p>
          </div>
        </div>

        <div className="projets-content">
          <div className="projets-text">
            <h1 className="projets-titre">My Snapchat</h1>
          </div>
          <div className="projets-img-snap">
            <a href="https://github.com/Mams-sy/My_Snapchat" target="_blank"><img className="img-snap" src={photosnap} alt="photo" /></a>
          </div>
          <div className="projets-description">
            <p className="projets-description-content">
              Application mobile similaire à Snapchat
            </p>
            <p className="projets-description-content-language">
              Languages : REACT NATIVE
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}
