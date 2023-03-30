import React from "react";
import { useState } from "react";



export const List = () => {

    const[content, setContent] = useState([]);
    const[inputValue, setInputValue] = useState('');

    function clear(){
        setContent([]);

    }
    
    return(
        <div>
            <div>

                <form >
                    <from onSubmit={(event)=>{
                        event.preventDefault()
                        const temp = [inputValue, ...content]
                        setContent(temp);
                        setInputValue('');


                    }}>
                            <input
                                type="text" placeholder="Tekstikenttä.." 
                                value    = {inputValue}
                                onChange = {e => setInputValue(e.target.value)}
                                
                                required/>
                            <input type="submit" value="Lähetä"/>
                            {
                                content.map((item) => (
                                    
                                    <ul>
                                        <li>
                                            <h2>{item}</h2>
                                        </li>
                                    </ul>                            
                                ))                               
                            }
                    </from>
                    <button onClick={clear}>clear</button>


                </form>
                


            
            </div>
        </div>
        
    );








}

