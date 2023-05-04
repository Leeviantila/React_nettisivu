import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";
import { useEffect } from "react";

const initialBoard = ['', '', '', '', '', '', '', '', ''];

export const TicTacToe = (props) => {

    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    useEffect(()=> {
        const winner = checkWinner();
        if(winner){
            setStatus(`Winner: ${winner}`);

        }

    },[gameState])

    const onSquareClick = (index) => {
        
        let strings = Array.from(gameState);

        if(strings[index] !== ''){
            return;

        }
        strings[index] = isXTurn ? 'X' : 'O'
        setGameState(strings);

        setIsXTurn(!isXTurn);
    }

    const checkWinner = () =>{

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 8, 7],

            [0, 3, 6],
            [1, 4, 8],
            [2, 5, 7],

            [0, 4, 7],
            [2, 4, 6],

        ]

        for(let indeksi = 0; indeksi < lines.length; indeksi++){

            const [a,b,c] = lines[indeksi];
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){

                return gameState[a];

            }

        }

        return null;
        
    }



    return(

        <div>
            <h1>TicTacToe</h1>
            <Board gameState = {gameState} onSquareClick = {onSquareClick}/>
            {status}
        </div>

    )


    
}


