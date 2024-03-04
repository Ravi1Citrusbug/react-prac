import { useState } from "react";
function HookCounter4() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, { id: items.length, value: 2 }]);
  };
  return (
    <div>
      <button onClick={addItem}> add item</button>
      <ul>
        {items.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          
        })}
      </ul>
    </div>
  );
}
export default HookCounter4;
