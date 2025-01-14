import React from 'react'
import { data } from './ContextA'
import { useContext } from 'react'

const ContextB = () => {
    const {name , change}=useContext(data)
  return (
    <div>
        <h1>Welcome To {name}</h1>
        <button onClick={change}>Click</button>
      
    </div>
  )
}

export default ContextB
