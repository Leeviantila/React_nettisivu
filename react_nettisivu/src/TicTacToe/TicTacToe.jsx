import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";


const initialBoard = ['', '', '', '', '', '', '', '', ''];

export const TicTacToe = (props) => {

    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);

    const onSquareClick = (index) => {
        
        let strings = Array.from(gameState);

        if(strings[index] !== ''){
            return;

        }
        strings[index] = isXTurn ? 'X' : 'O'
        setGameState(strings);

        setIsXTurn(!isXTurn);
    }

    return(

        <div>
            <h1>TicTacToe</h1>
            <Board gameState = {gameState} onSquareClick = {onSquareClick}/>

        </div>

    )


    
}


