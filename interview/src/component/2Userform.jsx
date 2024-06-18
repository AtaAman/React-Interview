import React, { useState } from "react";

function Userform() {
  const [input, setInput] = useState(null);
  return (
    <div className="mt-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold">User Details: {input} </h1>
      <input
        className="bg-black p-1 mt-3 text-white"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="Username"
        id=""
      />
    </div>
  );
}

export default Userform;
