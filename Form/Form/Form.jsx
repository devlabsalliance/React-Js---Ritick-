import React from 'react'
import { useState } from 'react'
import '../Form/Form.css'

const Form = () => {
    const data= {username : '' , password : '',}
    const[fvalue,setFvalue]= useState(data);
    // const validate =()=>{
    //     setFvalue.username('Abhay')
    //     setFvalue.password('123Xyx')
       

        
    // }
    const handleChange=(e)=>{
        const {name, value}=e.target;

        setFvalue({
            ...fvalue,[name]: value
        })


    }

    // const Submit =(e)=>{
    //     e.alert="Submitted"
    // }
    
  return (
    <div className='container'>
        <form >
            <h1>LOGIN FORM</h1>
            <div className="form">
                <div className="field">
                    <label > Username :</label>
                    <input type="text"name='username' placeholder='Username' value={fvalue.username} onChange={handleChange}/>
                    
                </div>
                <div className="field">
                    <label >Password :</label>
                    <input type="password" name='password' placeholder='Password' value={fvalue.password} onChange={handleChange}/>
                </div>
            </div>
            <button className='btn' ><b>Submit</b></button>
            

        </form>
      
    </div>
  )
}

export default Form
