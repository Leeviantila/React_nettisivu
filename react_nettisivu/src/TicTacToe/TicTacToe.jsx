import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";


const initialBoard = ['', '', '', '', '', '', '', '', ''];

export const TicTacToe = (props) => {

    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);

    const onSquareClick = () => {
        let strings = Array.from(gameState);

    }

    return(

        <div>
            <h1>TicTacToe</h1>
            <Board gameState = {gameState}/>

        </div>

    )


    
}


