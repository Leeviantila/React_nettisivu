import React from "react";
import { useState } from "react";

export const Buttons = () => {
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);


    function countClicks(){
        setCount(count + 1);
    }

    function countClicks2(){
        setCount2(count2 + 1);
    }

    function resetCount(){
        setCount(0);
        setCount2(0);

    }

    return(

        <div>
            <button onClick={countClicks}>Clicker: {count} times!</button>
            <br/>
            <button onClick={resetCount}>reset</button>
            <br/>
            <button onClick={countClicks2}>Clicker 2: {count2} times!</button>

        </div>



    )


}



