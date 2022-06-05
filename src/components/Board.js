import React, { useState } from "react";
import "../styles/css/Board.css";
import Banner from "./Banner"
import Control from "./ControlPanel"
import Field from "./Field"

function Board() {
    const [timer, setTimer] = useState(0);
    const [flagsLeft, setFlagsLeft] = useState(10);
    const [restart, setRestart] = useState(false);

    const handleClick = () => {
        alert("To win you must be open all spaces not containing bombs.\n\n" +
            "You lose if you open a cell that contains a bomb.\n\n" +
            "- Click on a cell with your mouse to open it.\n\n" +
            "- Right click on a cell with your mouse to add/remove a flag.\n\n" +
            "- You have 10 flags.");
    }

    return (
        <div className="board" onContextMenu={(e) => e.preventDefault()}>
            <Banner />
            <Control timer={timer} flagsLeft={flagsLeft} setRestart={setRestart} />
            <Field timer={timer} setTimer={setTimer} flagsLeft={flagsLeft} setFlagsLeft={setFlagsLeft}
                restart={restart} setRestart={setRestart} />
            <button className="help-btn" onClick={handleClick}>Help</button>
        </div>
    )
}

export default Board;