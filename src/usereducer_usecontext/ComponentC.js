import { countContext } from "../App";
import React, { useContext } from 'react';
function ComponentC(){
    const CountContext = useContext(countContext); 
    return (
        <div>
            C
            <button onClick={()=>CountContext.dispatch('increment')}>increment</button>
            <button  onClick={()=>CountContext.dispatch('decrement')}>decrement</button>
            <button  onClick={()=>CountContext.dispatch('reset')}>reset</button>
        </div>
    )
    }
    
export default ComponentC;