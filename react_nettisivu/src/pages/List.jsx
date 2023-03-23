import React from "react";
import { useState } from "react";



export const List = () => {

    const[content, setContent] = useState([]);
    const[inputValue, setInputValue] = useState('');

    
    return(
        <div>
            <div>

                <form >
                    <label>Enter your name:
                        <input 
                            type="text" placeholder="Tekstikenttä.." required
                            
                        />
                    </label>
                    <input type="submit" value="Lähetä"/>
                </form>


            
            </div>
        </div>
        
    );








}

