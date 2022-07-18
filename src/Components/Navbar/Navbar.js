import React from "react";
import './Navbar.css';


export default function Navbar() {
  return (
    <nav>
        
      <ul className="list">
        <li className="items"><a href="#propos">À propos</a></li>
        <li className="items"><a href="#competences">Compétences</a></li>
        <li className="items"><a href="#projets">Projets</a></li>
        <li className="items"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
