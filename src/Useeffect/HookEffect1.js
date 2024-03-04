import { useState, useEffect } from "react";
function HookEffect1() {
  const [count, setCount] = useState(0);
  useEffect(()=> {document.title =`you clicked ${count}`})
  return (
    <div>
      <button onClick={() => setCount(count+1)}>click {count} times</button>
    </div>
  );
}
export default HookEffect1;
