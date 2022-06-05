import React from "react";
import "../styles/css/Banner.css";
import bomb from '../styles/images/blue-bomb-logo.png';

function Banner() {
    return (
        <div className="banner">
            <h2 className="game-header">Minesweeper</h2>
            <img src={bomb} className="logo" alt="Bomb as logo" />
        </div>
    )
}
export default Banner;