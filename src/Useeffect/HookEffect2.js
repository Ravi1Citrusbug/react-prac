import { useState, useEffect } from "react";
function HookEffect2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("usefffect");
    document.title = `you clicked ${count}`;
  },[count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default HookEffect2;
