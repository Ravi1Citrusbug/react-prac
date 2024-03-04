import { useState } from "react";
function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({...name,firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({...name ,lastName: e.target.value })}
      />
      <h1>firts name -{name.firstName}</h1>
      <h1>lastname - {name.lastName}</h1>
    </div>
  );
}
export default HookCounter3;
