import React, { useEffect, useState } from "react";
import "../styles/css/Board.css";
import Banner from "./Banner"
import Control from "./ControlPanel"
import Field from "./Field"

function Board() {
    const [timer, setTimer] = useState(0);
    const [flagsLeft, setFlagsLeft] = useState(10);
    const [restart, setRestart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timerID, setTimerID] = useState(null);

    // Initialize timer on mount of board
    useEffect(() => {
        newTimer();
        return () => {
            clearInterval(timerID);
        };
    }, [])

    useEffect(() => {
        if (restart === true || gameOver === true) {
            if (timerID !== 0) {
                clearInterval(timerID);
            }
        }
    }, [restart, gameOver])

    useEffect(() => {
        console.log("timerID set: " + timerID);
    }, [timerID])

    useEffect(() => {
        if (restart === true) {
            newTimer();
            setRestart(false);
            setGameOver(false);
        }
        return () => {
            clearInterval(timerID);
        };
    }, [restart])

    // Clears timer ID and sets a new interval to increment the timer value
    const newTimer = () => {
        setTimer(0);
        if (timerID !== null) {
            clearInterval(timerID);
        }
        setTimerID(setInterval(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000));
    }

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
            <Field flagsLeft={flagsLeft} setFlagsLeft={setFlagsLeft}
                restart={restart} setRestart={setRestart} setGameOver={setGameOver}/>
            <button className="help-btn" onClick={handleClick}>Help</button>
        </div>
    )
}

export default Board;