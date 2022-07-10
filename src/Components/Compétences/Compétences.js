
import React from "react";
import "./Compétences.css";
import { GiBrain } from "react-icons/gi";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {FaPhp} from "react-icons/fa";
import {FaSymfony} from "react-icons/fa";
import {FaLaravel} from "react-icons/fa";
import {SiMysql} from "react-icons/si";
import {FaHtml5} from "react-icons/fa";
import {DiCss3} from "react-icons/di";
import {SiGithub} from "react-icons/si";




export default function Compétences() {
  return (
    <div id="competences">
      <div className="competences">
        <div className="competences-header">
          <div>
            <GiBrain className="competences-logo" />
          </div>
          <div>
            <h1 className="competences-title"> Compétences</h1>
          </div>
        </div>
        <div className="competences-content">
          <div className="competences-content-line1">
            <div className="competences-content-js">
              <div className="competences-content-js-line1">
                <div className="comp-title jsjs">
                  <div>
                    <SiJavascript className="comp-logos" />
                  </div>
                  <div className="comp-description ">
                    <p className="js">Javascript</p>
                  </div>
                </div>

                <div className="comp-title react">
                  <div>
                    <FaReact className="comp-logos" />
                  </div>
                  <div className="comp-description">
                    <p className="js">React</p>
                  </div>
                </div>

                <div className="comp-title mongo">
                  <div>
                    <SiMongodb className="comp-logos" />
                  </div>
                  <div className="comp-description">
                    <p className="js">Mongo DB</p>
                  </div>
                </div>
              </div>

              <div className="competences-content-js-line2">
                <div className="comp-title node">
                  <div>
                    <FaNode className="comp-logos" />
                  </div>
                  <div className="comp-description">
                    <p className="js">Node</p>
                  </div>
                </div>

                <div className="comp-title jsjs">
                  <div>
                    <SiExpress className="comp-logos" />
                  </div>
                  <div className="comp-description ">
                    <p className="js">Express</p>
                  </div>
                </div>
              </div>
              <h3 className="comp-txt">Javascript</h3>
            </div>
            <div className="competences-content-php">
              <div className="comp-bottom-php">
            <div className="competences-content-php-line1">
                <div className="comp-title-php jsjs">
                  <div>
                    <FaPhp className="comp-logos" />
                  </div>
                  <div className="comp-description ">
                    <p className="js">Php</p>
                  </div>
                </div>

                <div className="comp-title-php react">
                  <div>
                    <FaSymfony className="comp-logos" />
                  </div>
                  <div className="comp-description">
                    <p className="js">Symfony</p>
                  </div>
                </div>

                <div className="comp-title-php mongo">
                  <div>
                    <FaLaravel className="comp-logos" />
                  </div>
                  <div className="comp-description">
                    <p className="js">Laravel</p>
                  </div>
                </div>
              </div>
              <h3 className="comp-txt-php">PHP</h3>
              </div>
            </div>
          </div>










<div className="competences-bottom">
  <div className="bottom">

          <div className="comp-title-php mongo">
                  <div>
                    <FaHtml5 className="comp-logos-bottom" />
                  </div>
                  <div className="comp-description-bottom">
                    <p className="js">Html</p>
                  </div>
                </div>

                <div className="comp-title-php jsjs">
                  <div>
                    <DiCss3 className="comp-logos-bottom" />
                  </div>
                  <div className="comp-description-bottom">
                    <p className="js">CSS</p>
                  </div>
                </div>

                <div className="comp-title-php express">
                  <div>
                    <SiMysql className="comp-logos-bottom" />
                  </div>
                  <div className="comp-description-bottom">
                    <p className="js">MySQL</p>
                  </div>
                </div>

                <div className="comp-title-php node">
                  <div>
                    <SiGithub className="comp-logos-bottom" />
                  </div>
                  <div className="comp-description-bottom">
                    <p className="js">Git</p>
                  </div>
                </div>
                </div>

</div>


        </div>
      </div>
    </div>
  );
}
