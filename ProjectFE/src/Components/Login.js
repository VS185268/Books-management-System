import React, { useState } from "react";
import Registration from "./Registration";
import { useNavigate } from "react-router-dom";
import App from "../App";
import axios from "axios";
import './styles.css';
import Profile from "./Profile";

export default function Login()
{
 const navigate=useNavigate();


   const [email,setemail]=useState();
   const [password,setpassword]=useState();

   //call api server
const handlereg=()=>{
   navigate('/register');
}
const handlelogin=(e)=>{
   e.preventDefault();
        const url="https://localhost:44319/api/Main/Login"
        const data={
            email:email,
            password:password
            
        
        }
        axios.post(url,data).then((result)=>
        {   
            clear();
            const dt=result.data;
            if(dt.statuscode===200){
               const handleprofile=(dt)=>{
                  return(<Profile Person={{firstname:dt.firstname,lastname:dt.lastname}}/>
 
                  );
                  
               }
               navigate('/dashboard')
              
              
            }
            else{
               navigate('/errorpage')
            }
            
            }).catch((error)=>{
            console.log(error);
        })
        var clear=()=>{
            
            setemail("");
            setpassword("");
        };


}
   

   return(<>
   <nav className="Lnav"><div className="heading"  style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15vh',}}><h1>Welcome To Login </h1></div></nav>
   <div >
   <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:"2rem",
    marginRight:"1rem",
    height: '7vh'}}>
      <label for="email"><h2>Email </h2></label>
   <form><input id="email" value={email} type="email" onChange={(e)=>setemail(e.target.value)}></input> </form></div><div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:"2rem",
    marginLeft:"1.8rem",
    height: '7vh'}}>
   <label for="password"><h2>Password </h2></label>
   <form><input id="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input></form>
   </div>
<br></br>
<div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   height: '5vh'}}>
   <button id="button" type="button" onClick={(e)=>handlelogin(e)}>Login</button></div>
   </div>
   <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    alignmentBaseline:"center",
    alignItems:"baseline",
    marginRight:"2rem",
    gap:"4rem",
    height: '8vh'}}>
   <div><label><h2>New User </h2></label> 
   </div>
   <div style={{
      marginleft:"5rem",
      gap:"2rem"
   }}>
   
   <button type="button" onClick={handlereg}> Register</button>
   </div>
   </div>
   </>);

   
   

 
}