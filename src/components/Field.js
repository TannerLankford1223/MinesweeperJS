import React, { useEffect, useState } from "react";
import "../styles/css/Field.css"
import Cell from "./Cell";
import CreateBoard from "../utils/CreateBoard";
import revealCells from "../utils/RevealCells";

function Field({ setTimer, flagsLeft, setFlagsLeft, restart, setRestart }) {
    const [field, setField] = useState([]);
    const [mines, setMines] = useState([]);
    const [emptySpacesLeft, setEmptySpacesLeft] = useState(0);
    const [timerID, setTimerID] = useState(0);

    useEffect(() => {
        newField();
        setRestart(false);
        clearInterval(timerID);
        setTimerID(setInterval(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000));
        return () => {
            clearInterval(timerID);
        };
    }, [restart]);

    useEffect(() => {
        checkForWin();
    }, [field])

    const newField = () => {
        const field = CreateBoard();
        setMines(field.mines);
        setField(field.board);
        setEmptySpacesLeft(field.emptySpaces);
        setFlagsLeft(10);
        setTimer(0);
    }

    const checkForWin = () => {
        if (emptySpacesLeft === 0 && flagsLeft === 0) {
            alert("You win!");
        }
    }

    const addFlag = () => {
        setFlagsLeft(prevCount => prevCount - 1);
    }

    const removeFlag = () => {
        setFlagsLeft(prevCount => prevCount + 1);
    }

    const updateFlag = (e, x, y) => {
        e.preventDefault();
        let newField = JSON.parse(JSON.stringify(field));
        let cell = newField[x][y];
        if (!cell.fired) {
            if (cell.flagged) {
                removeFlag();
                cell.flagged = false;
            } else {
                if (flagsLeft > 0) {
                    addFlag();
                    cell.flagged = true;
                }
            }
            setField(newField);
        }
    }

    const revealCell = (x, y) => {
        let newBoard = JSON.parse(JSON.stringify(field));
        let cell = newBoard[x][y];
        if (cell.bomb) {
            clearInterval(timerID);
            for (let i = 0; i < mines.length; i++) {
                newBoard[mines[i][0]][mines[i][1]].fired = true;
            }
            setField(newBoard);
        } else {
            let revealedSpaces = revealCells(newBoard, x, y, emptySpacesLeft);
            setField(revealedSpaces.arr);
            setEmptySpacesLeft(revealedSpaces.emptySpacesLeft);
        }
    }

    return (
        <div className="field">
            {field.map((row, index1) => {
                return (
                    <div key={index1}>
                        {row.map((cell, index2) => {
                            return <Cell details={cell} key={index2} updateFlag={updateFlag} revealCell={revealCell} />
                        })}
                    </div>
                )
            })}
        </div>
    );
}


export default Field;