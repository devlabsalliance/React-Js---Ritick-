import React from 'react'
import { createContext } from 'react'
import ContextC from './ContextC';
import ContextB from './ContextB';
import { useState } from 'react';

const data=createContext();//Creation Of context
const ContextA = () => {
    // const Name= {name :'Devlabs' , comp : "Devlabs Alliance"}
    const [name ,setName]=useState("Devlabs")

    const change= ()=>{
        setName("Devlabs Alliance")
    }
    
  return (
    <div>
        {/* providing the context for the cosumer */}
<data.Provider value={{name , change}}>
<ContextB/>
    <ContextC/>
   
</data.Provider>

      
    </div>
  )
}

export default ContextA;
export {data};
