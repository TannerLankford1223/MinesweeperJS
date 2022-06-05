import React from "react";
import "../styles/css/Cell.css";
import target from "../styles/images/target.svg"
import mine from "../styles/images/mine.svg"

function Cell({ details, updateFlag, revealCell }) {

    const handleClick = (e) => {
        revealCell(details.x, details.y);
    }
    const handleRightClick = (e) => {
        updateFlag(e, details.x, details.y);
    };

    let btn;
    if (details.flagged && !details.fired) {
        btn = (
            <button className="cell flagged"
                onClick={handleClick}
                onContextMenu={handleRightClick}>
                <img src={target} className="img" alt="Flag" />
            </button>
        )
    } else if (details.bomb && details.fired) {
        btn = (
            <button className="cell bombed"
                onClick={handleClick}
                onContextMenu={handleRightClick}>
                <img src={mine} className="img" alt="Mine" />
            </button>
        )

    } else if (details.fired) {
        btn = (
            <button className="cell fired"
                onClick={handleClick}
                onContextMenu={handleRightClick}>
                <h2 className="value">{details.value}</h2>
            </button>
        )
    } else {
        btn = (
            <button className="cell"
                onClick={handleClick}
                onContextMenu={handleRightClick}>
            </button>
        )
    }

    return btn;
}

export default Cell;