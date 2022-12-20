import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={(e) => setCount(count + 1)}>Arttir</button>
        <button onClick={(e) => setCount(count - 1)}>Azalt</button>
      </div>
    </div>
  );
};
export default Count;
