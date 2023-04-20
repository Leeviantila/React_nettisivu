import React from "react";
import {Square} from './Square.jsx';

export const Board =({gameState})=>{

    return(
        <div>
            <div className="row">
                <Square className = "b-botton-r"
                state = {gameState[0]}
                />
                <Square className = "b-botton-r"
                state = {gameState[1]}
                />
                <Square className = "b-botton"
                state = {gameState[2]}
                />
            </div>

            <div className="row">
                <Square className = "b-botton-r"
                state = {gameState[3]}
                />
                <Square className = "b-botton-r"
                state = {gameState[4]}
                />
                <Square className = "b-botton"
                state = {gameState[5]}
                />
            </div>

            <div className="row">
                <Square className = "b-right"
                state = {gameState[6]}
                />
                <Square className = "b-right"
                state = {gameState[7]}
                />
                <Square 
                state = {gameState[8]}
                />
                
            </div>


        </div>

    );

}