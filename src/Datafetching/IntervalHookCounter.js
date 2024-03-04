import react , { useEffect, useState } from 'react';
function IntervalHookCounter(){
    const [count, setCount] = useState(0);
    const tick=()=>{
        setCount(preCount =>preCount+1)
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => clearInterval(interval)
    },[])
    return <div>{count}</div>

}
export default IntervalHookCounter;