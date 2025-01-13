import React from 'react'
import { useRef } from 'react'
import "../Form/FormUn.css"

const FormUn = () => {

  const username= useRef();
  const password= useRef();
  // const [fvalue , setFvalue] =setFvalue();
  // const handleSubmit = ()=>{
  //   setFvalue
  // }

  return (
    <div className='container'>
      
      <div className="form">
        <form >
          <h1>Login Form</h1>
          <div className='field'>
          <label >Username :</label>
          <input type="text"  placeholder='username' name='username' ref={username}/>
          </div>
          <div className='field'>
            <label >Password : </label>
            <input type="password" name="password" placeholder='password' ref={password} />
          </div>
          <button className='btn'><b>Submit</b></button>
        </form>
      </div>



      
    </div>
  )
}

export default FormUn
