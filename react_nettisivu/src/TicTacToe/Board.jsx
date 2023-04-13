import React from "react";
import {Square} from './Square.jsx';

export const Board =()=>{

    return(
        <div>
            <div className="row">
                <Square className = "b-botton-r"/>
                <Square className = "b-botton-r"/>
                <Square className = "b-botton"/>
            </div>

            <div className="row">
                <Square className = "b-botton-r"/>
                <Square className = "b-botton-r"/>
                <Square className = "b-botton"/>
            </div>

            <div className="row">
                <Square className = "b-right"/>
                <Square className = "b-right"/>
                <Square/>
            </div>


        </div>

    );

}