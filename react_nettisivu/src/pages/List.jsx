import React from "react";
import { useState } from "react";



export const List = () => {

    const[content, setContent] = useState([]);
    const[inputValue, setInputValue] = useState('');

    const removeHandler = (removeIndex) =>{
        const removeItem = content.filter((item, index) => {
            
            return removeIndex !== index;
            
        });

        setContent(removeItem);
    }

    function clear(){
        setContent([]);

    }
     
    return(
        <div>
            <div>

                
                    <form onSubmit={(event)=>{
                        event.preventDefault()
                        const temp = [inputValue, ...content]
                        setContent(temp);
                        setInputValue('');
                    }}>
                            <input
                                type="text" 
                                placeholder="Tekstikenttä.." 
                                value    = {inputValue}
                                onChange = {e => setInputValue(e.target.value)}
                                
                                required/>
                            <input type="submit" value="Lähetä"/>

                            {
                                content.map((item, index) => (
                                    
                                    <ul>
                                        <li>
                                            <h2 key = {index}>{item}</h2>
                                            <button form = "" onClick={()=> removeHandler(index)}>Remove</button>
                                        
                                        
                                        
                                        
                                        </li>
                                    </ul>                            
                                ))                               
                            }
                    
                </form>
                    <button onClick={clear}>clear</button>


                


            
            </div>
        </div>
        
    );








}

