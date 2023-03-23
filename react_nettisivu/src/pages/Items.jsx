import React from "react";
import {Item} from "./Item";
import {ItemDatabase, items} from "./ItemDatabase";



export const Items = () => {
    
    return(
        <div>
            {
                items.map(({title, img, describtion}) => 
                <Item
                    title={title}
                    img={img}
                    describtion={describtion}
                
                />

                
                )
            }

        </div>


    );


}








