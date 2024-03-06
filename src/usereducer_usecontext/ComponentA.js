import { countContext } from "../App";
import React, { useContext } from 'react';
function ComponentA(){
    const CountContext = useContext(countContext); 
    return (
        <div>
            A
            <button onClick={()=>CountContext.dispatch('increment')}>increment</button>
            <button  onClick={()=>CountContext.dispatch('decrement')}>decrement</button>
            <button  onClick={()=>CountContext.dispatch('reset')}>reset</button>
        </div>
    )
    }
    
export default ComponentA;