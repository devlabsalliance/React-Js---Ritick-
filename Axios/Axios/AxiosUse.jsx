import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosUse = () => {

  const [useData ,setUseData]=useState([])


    useEffect(()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
          console.log(Response);
          setUseData(Response.data)
          
        })
    },[])
  return (
    <div>
     

      <div>Axios Use!!!!!
        {useData.map((data)=>{

          return(<div>{data.name}</div>)
        })}
      </div>


      
        
      
    </div>
  )
}

export default AxiosUse
