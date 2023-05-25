import React from "react";


export const ScoreBoard = ({scores}) =>{

    return(

        <div className="ScoreBoard">

            <span>X - {scores.XScore}</span>
            <span>O - {scores.OScore}</span>

        </div>

    )


}





