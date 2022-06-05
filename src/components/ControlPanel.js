import React from "react";
import "../styles/css/ControlPanel.css";
import bomb from "../styles/images/black-bomb.png";

function Control({ timer, flagsLeft, setRestart }) {

    const handleClick = () => {
        setRestart(true);
    }
    return (
        <div className="control-panel">
            <div><img className="total-flag-count" src={bomb} alt="Bomb icon" />
                <label>{flagsLeft}</label>
            </div>
            <div><button className="restart-btn" onClick={handleClick} type="button">Restart</button></div>
            <label>{Math.floor(timer / 60)}:{(timer % 60 < 10) ? `0${timer % 60}` : timer % 60}</label>
        </div>
    )
}
export default Control;