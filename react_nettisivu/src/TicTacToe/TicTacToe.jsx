import React from "react";
import './TicTacToe.css';

import { Board          } from "./Board";
import {ScoreBoard      } from "./ScoreBoard";

import { useState       } from "react";
import { useEffect      } from "react";

const initialBoard = ['', '', '', '', '', '', '', '', ''];

export const TicTacToe = (props) => {

    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');
    const [scores, setScores] = useState({XScore: 0, OScore: 0});

    useEffect(()=> {
        const winner = checkWinner();
        if(winner){
            setStatus(`Winner: ${winner}`);

        }else if(!gameState.includes('')){

            setStatus(`It's a draws`);


        }else{
            setStatus(`It's ${isXTurn ? 'X' : 'O'}'s turn`);
        }

    },[gameState])


    useEffect(() => {
        const winner = checkWinner();
        
        if(winner === null){
            return;
        }

        if(winner === "X"){
            setScores({XScore: scores.XScore + 1, OScore: scores.OScore});
        }
        else{
            setScores({XScore: scores.XScore, OScore: scores.OScore + 1});
        }


    }, [status])



    const onSquareClick = (index) => {
        
        let strings = Array.from(gameState);
        
        // Peli on voitettu, ei voi painaa enää tuutuja
        if(status.includes("Winner")){
            return;
        }

        if(strings[index] !== '' ){
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
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
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

    function clearScoreBoard(){
        setScores({XScore: 0, OScore: 0});
        setGameState(initialBoard);
        setIsXTurn(true);

    }

    return(

        <div>
            <div className="game">

                <h1>TicTacToe</h1>

                <ScoreBoard scores = {scores}/>
                <button onClick={clearScoreBoard}> Clear ScoreBoard</button>

                <Board gameState = {gameState} onSquareClick = {onSquareClick}/>
                
                {!status.includes("Winner") && (
                    <>
                        <span>{status}</span>
                        <button onClick={()=>{
                            setGameState(initialBoard);
                            setIsXTurn(true);

                        }}>Clear Board</button>
                    </>

                )}

                {status.includes("Winner") && (
                    <>
                        <span style={{color:"green"}}>{status}</span>
                        <button style={{background:"lightgreen"}} onClick={()=>{
                            setGameState(initialBoard);
                            setIsXTurn(true);

                        }}>Play again</button>
                    </>

                )}

            </div>
        </div>

    )


    
}


