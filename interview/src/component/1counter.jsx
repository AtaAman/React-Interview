import React, { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }
  
  function subCount() {
    setCount(count - 1);
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl">counter : {count}</h1>
      <button className="bg-red-600 text-white" onClick={addCount}>
        add
      </button>
      <button className=" bg-black text-white" onClick={subCount}>
        sub
      </button>
    </div>
  );
}

export default counter;
