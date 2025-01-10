import React from "react";
 import './Profile.css'
 import profile_icon from '../images/IMG.JPG'
const Profile=()=>{

    return(
        <div className="ups">
            
           <div className="profile">

            <img src={profile_icon}alt="" />
            <div className="title"><h1>Ritick Bhushan</h1></div>
            <div className="desc"><h3>I am from Begusarai , Bihar . Currently working in Devlabs Alliance as Software Developer.</h3> </div>

           </div>
           <div className="pbutton"><a href="mailto: ritick4241@gmail.com">Contact ME</a></div>
        </div>
    );
}
export default Profile

