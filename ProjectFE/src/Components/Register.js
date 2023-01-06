import React, { useState } from 'react';

import axios from 'axios';

import './styles.css';
import { useNavigate } from 'react-router-dom';
function Register(){
    var [firstname,setfirstname]=useState("");
    var [lastname,setlastname]=useState("");
    var [email,setemail]=useState("");
    var [password,setpassword]=useState("");
    var [registeredon,setregisteredon]=useState("");
    const navigate=useNavigate();
    var handleRegistration = (f)=>{
        f.preventDefault();
        const url="https://localhost:44319/api/Main/Registration"
        const data={
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            Createdon:registeredon
            
        
        }
        axios.post(url,data).then((result)=>
        { clear();
            const dt=result.data;
            alert(dt.statusmessage);
        })
        .catch((error)=>{
            console.log(error);
        })
        var clear=()=>{
            setfirstname("");
            setlastname=("");
            setemail=("");
            setpassword=("");
            setregisteredon=("");
        };

navigate('/dashboard');
        
        console.log(firstname,lastname,email,password,registeredon);
    }
    const handleLogin=()=>{
        navigate('/login');
    }
    return (<>
        
    <nav className="RNav"><div className="heading"  style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15vh',}}><h1>Welcome To Registrations</h1></div> </nav>
   <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh'}}>
    
    <label><h3>FirstName <input value={firstname} onChange={(f)=>setfirstname(f.target.value)} type="firstname"></input></h3></label><div/>
    </div>
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh'}}>
    
    <span><form><label><h3>LastName <input value={lastname} onChange={(f)=>setlastname(f.target.value)} type="lastname"></input> </h3></label>
    </form></span></div>
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"2.5rem",
    height: '8vh'}}>
    
    <span><form><label><h3>Email <input  value={email} onChange={(f)=>setemail(f.target.value)} type="text"></input></h3></label>
    </form></span>
    </div>
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'0.5rem',
    height: '8vh'}}>
    <span><form><label><h3>Password <input value={password} onChange={(f)=>setpassword(f.target.value)} type="password"></input></h3></label>
    </form></span>
    </div>
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:'1rem',
    height: '8vh'}}>
    <span><form><label><h3>Registeredon <input value={registeredon} onChange={(f)=>setregisteredon(f.target.value)} type="date"></input></h3></label>
    </form></span>
    </div>
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh'}}>
    <button type="submit" className="regbut" onClick={(f)=>handleRegistration(f)}>Register</button>
    </div>
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:"1.5rem",
    height: '20vh'}}>
    <div><h3>Already Registered? <button type="button" onClick={handleLogin}>Log In</button></h3></div>
    </div>
    </>
    );
}
export default Register;