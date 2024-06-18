import React, { useState, useEffect } from 'react'

function Timmer() {
    const [time , setTime] = useState(60)
    useEffect(() => {
      if(time>0){
        const timer = setTimeout(() => setTime(time-1),1000)
        return () => clearTimeout(timer)
      }
      setTime(time)
    }, [time]) 
  return (
    <div>Time left : {time} sec</div>
  )
}

export default Timmer