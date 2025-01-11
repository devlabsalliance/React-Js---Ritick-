import React, { useState } from 'react'
import '../Counter/Count.css'



const Count = () => {
    const[count , setCount]=useState(0);
const Increment=()=>{
    setCount(count+1)
}
const Decrement=()=>{
    setCount(count-1)
    
}
const Reset =()=>{
    setCount(0)
}
  return (


    <div className='first'>
      <h1>Counter App</h1>
      <p>{count}</p>
<div className='child'>
<button className='incbtn' onClick={Increment}><b> Increment</b></button>
<button className='decbtn' onClick={Decrement}><b> Decrement</b></button>
<div>
<button className='reset' onClick={Reset}><b>RESET</b></button>
</div>
</div>

    </div>
  )
}

export default Count
