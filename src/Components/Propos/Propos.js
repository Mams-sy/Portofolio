import React from "react";
import "./Propos.css";
import photo from "../../assets/photo.png";
import { FaGraduationCap } from "react-icons/fa";
import cv from "../../assets/CV.pdf";


export default function Propos() {
  return (
    <div id="propos">
      

      <div className="propos">
        <div className="propos-text">
          <div className="propos-photo">
            <img className="propos-image" src={photo} alt="photo" />
          </div>
          <div className="propos-para">
            <h1 className="paragraphe-headlines">À propos de moi</h1>
            <h3 className="paragraphe">
              Je m'appelle Mamadou SY, étudiant en première année de
              développement web à la Web@cademie d'EPITECH à Lyon.
              <br></br>
              Je suis très curieux, une bonne capacité d'adpation et un bon
              esprit d'équipe sont mes principales qualités.
              <br></br>
              Mon objectif est d'en apprendre le plus possible chaque jour .
            </h3>

            <div className="comp-cv">
              <a href={cv} download><button className="button-cv slide">&nbsp;</button></a>
            </div>

          
            <div className="formations">
              <div>
                <FaGraduationCap className="education-logo" />
              </div>
              <div>
                <h1 className="formations-title"> Formations</h1>
              </div>
            </div>
            <div className="formations-content">
              <h2 className="formations-content-title">
                DÉVELOPPEUR WEB,{" "}
                <span className="formations-place">Web@cademie</span>
              </h2>
              <h3 className="formations-content-txt">
                Novembre 2021 - en cours | Lyon{" "}
              </h3>
            </div>
            <div className="formations-content">
              <h2 className="formations-content-title">
                LICENCE INFORMATIQUE,{" "}
                <span className="formations-place">Université Jean Monnet</span>{" "}
              </h2>
              <h3 className="formations-content-txt">
                Septembre 2019 - Juin 2021 | Saint-Étienne{" "}
              </h3>
              <h3 className="cursus">CURSUS MISPIC</h3>
              <h4 className="cursus-content">
                Mathématique, Informatique, Chimie, Sciences de l'Ingénieur
              </h4>
            </div>
            <div className="formations-content">
              <h2 className="formations-content-title">
                BAC STI2D,{" "}
                <span className="formations-place">Lycée François Mauriac</span>
              </h2>
              <h3 className="formations-content-txt">
                Septembre 2016 - Juillet 2018 | Andrézieux-Bouthéon{" "}
              </h3>
              <h3 className="cursus">OPTION SIN</h3>
              <h4 className="cursus-content">
                Création d'un site WEB sur le thème de mon choix.
                <br></br>
                Création d'une application mobile pour contrôler une voiture à
                taille réduite.
                <br></br>
                 Projet de fin d'année : Automatiser un système incendie
                <br></br>
                (programmation de logiciels et capteurs).
              </h4>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
