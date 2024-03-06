import { countContext } from "../App";
import React, { useContext } from 'react';
function ComponentB(){
    const CountContext = useContext(countContext); 
    return (
        <div>
            B
            <button onClick={()=>CountContext.dispatchCount('increment')}>increment</button>
            <button  onClick={()=>CountContext.dispatchCount('decrement')}>decrement</button>
            <button  onClick={()=>CountContext.dispatchCount('reset')}>reset</button>
        </div>
    )
    }
    
export default ComponentB;