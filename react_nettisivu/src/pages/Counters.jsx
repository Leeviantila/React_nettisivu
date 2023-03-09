import React from "react";
import { useState, useEffect } from "react";


export const Counters = () => {

    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);
    const[count3, setCount3] = useState(1);



    useEffect(() => {

        setTimeout(function(){
            setCount(count + 1);

        }, 1000);

    }, []);

    useEffect(() => {

        setTimeout(function(){
            setCount2(count2 + 1);
            setCount3(count3 + 1);

        }, 1000);

    });



    return(

        <div>
            <h1>LaskuriJuttu {count} times!</h1>
            <h1>LaskuriJuttu2 {count2} times!</h1>
            <h1>LaskuriJuttu3 {count3} times!</h1>


        </div>


    );


}




