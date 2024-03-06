import { countContext } from "../App";
import React, { useContext } from 'react';
function ComponentC(){
    const CountContext = useContext(countContext); 
    return (
        <div>
            C
            <button onClick={()=>CountContext.dispatchCount('increment')}>increment</button>
            <button  onClick={()=>CountContext.dispatchCount('decrement')}>decrement</button>
            <button  onClick={()=>CountContext.dispatchCount('reset')}>reset</button>
        </div>
    )
    }
    
export default ComponentC;