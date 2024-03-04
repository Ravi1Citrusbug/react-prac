import { useState, useEffect } from "react";
function HookEffect3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (e) => {
    console.log(5);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("mouseffect");
    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("finished");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      HOOKS X-{x} Y-{y}
    </div>
  );
}
export default HookEffect3;
