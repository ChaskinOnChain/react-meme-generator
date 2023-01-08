import React from "react";
import Troll from "../Trollface_non-free.png.webp";

export default function Navbar() {
  return (
    <nav>
      <img className="troll" src={Troll} alt="Troll Face" />
      <h2 className="meme-title">Meme Generator</h2>
      <h3 className="react-course">React Course - Project 3</h3>
    </nav>
  );
}
