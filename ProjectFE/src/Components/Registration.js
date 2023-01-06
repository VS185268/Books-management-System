import React,{useState} from 'react';
import axios from 'axios';
import Login from './Login';


function Registration(){
    
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [phoneno,setphoneno]=useState("");
    const handlesave=(f)=>{
        f.preventDefault();
        console.log(name,email,password,phoneno);
        const url="https://localhost:44319/api/Main/Registration"
        const data={
            Name:name,
            Email:email,
            Password:password,
            Phoneno:phoneno
        
        }
        axios.post(url,data).then((result)=>
        {const dt=result.data})
        .catch((error)=>{
            console.log(error);
        })

    }


    return (<> <div>
    <form>
    <lable htmlFor="name"> Name</lable>
        <input value={name} onChange={(f)=>setname(f.target.value)} type="name"></input>
        
    </form>
    <form>
    <lable htmlFor="email"> email</lable>
        <input value={email} onChange={(f)=>setemail(f.target.value)} type="email"></input>
        
    </form>
    <form>
    <lable htmlFor="password"> password</lable>
        <input value={password} onChange={(f)=>setpassword(f.target.value)} type="password"></input>
        
    </form>
    <form>
    <lable htmlFor="phoneno"> Phoneno</lable>
        <input value={phoneno} onChange={(f)=>setphoneno(f.target.value)} type="phoneno"></input>
        
    </form>
    <button type="button"
    onClick={(f)=>handlesave(f)}> Register</button>
    </div>
     
    
    <div>
        <label>Already have an account</label>
        <button type="button"
        onClick={<Login />}>Log In</button>

    </div>
    </>
    )
}
export default Registration