import React, { useState } from 'react';

function ButtonColor() {
  const [color, setColor] = useState('white');

  const handleColor = (e) => {
    setColor(e.target.innerText);
  };

  return (
    <>
      <div>Click button to find color</div>
      <div className='flex gap-2'>
        <button onClick={handleColor} className='bg-gray-400 px-2'>red</button>
        <button onClick={handleColor} className='bg-gray-400 px-2'>green</button>
        <button onClick={handleColor} className='bg-gray-400 px-2'>yellow</button>
        <button onClick={handleColor} className='bg-gray-400 px-2'>pink</button>
        <button onClick={handleColor} className='bg-gray-400 px-2'>blue</button>
      </div>
      <div className='w-full h-[150px] mt-2' style={{ backgroundColor: color }}>
        
      </div>
    </>
  );
}

export default ButtonColor;
