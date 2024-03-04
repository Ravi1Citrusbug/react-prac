import { useState, useEffect } from "react";
import HookEffect3 from './HookEffect3';
function HookEffect4() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>TOGGLE DISPLAY</button>
      {
        display && <HookEffect3></HookEffect3>
      }
    </div>
  );
}
export default HookEffect4;
