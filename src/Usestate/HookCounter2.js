import { useState } from "react";
function HookCounter2()
{ 
    const intialCount = 0
    const [count ,setCount] = useState(intialCount);
    const incrementiveFive=()=>{
        for (let i=0;i<5;i++){
            // setCount(perCount=>perCount+1)
            // setCount(count+1)
        }
    }
    return (
        <div>
            count : { count}
            <button onClick = {() => setCount(count +1)}>increment</button>
            <button onClick = {() => setCount(count -1)}>decrement</button>
            <button onClick = {() => setCount(intialCount)}>reset</button>
            <button onClick = {incrementiveFive}> incrementiveFive</button>
            <button onClick = {() => setCount(count+5)}>5</button>
        </div>
    )
}
export default HookCounter2;