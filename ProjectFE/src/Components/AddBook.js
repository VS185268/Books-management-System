import { React,useState } from "react"
import './styles.css';
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddBook(){
    const [booktype,setbooktype]=useState("");
    const [author,setauthor]=useState("");
    const [noofbooks,setnoofbooks]=useState(0);
    const [addedby,setaddedby]=useState("");
    const navigate=useNavigate();
    const handleaddbook=()=>{
             
        
        // e.preventDefault();
             const url="https://localhost:44319/api/Main/AddBook"

             const data={
                 booktype:booktype,
                 author:author,
                 noofbook:noofbooks,
                 addedby:addedby
                }

               /* {
   
   
                    "booktype":"Maths",
                    "author":"ram",
                    "noofbook":10,
                    "addedby":"sai"
                }*/

             console.log(booktype,author,noofbooks,addedby);

             axios.post(url,data).then((response)=>console.log(response)).catch(err=>console.log(err))


            //  axios.post(url,data).then((result)=>
            //  { 
            //     console.log()
            //      const dt=result.data;
            //      alert(dt);
            //      clear();

            //      }).catch((error)=>{
            //      console.log(error);
            //  })


             var clear=()=>{
                 
                setbooktype("");
                setaddedby("");
                setauthor("");
                setnoofbooks(0);
             };
     
     }
        



    return(
    <>
    <nav className="nav" >
    </nav><div className="add">
    <label>BookType <input type="Text" value={booktype} onChange={(e)=>setbooktype(e.target.value)}></input></label>
    <br></br>
    <div><label className="Text" value={author} onChange={(e)=>setauthor(e.target.value)}>Author <input type="Text"></input></label></div>
    <div><label className="noofbooks">No Of Books <input type="number" value={noofbooks} onChange={(e)=>setnoofbooks(e.target.value)}></input></label></div>
    <div> <label className="Addedby">Added Person <input type="text" value={addedby} onChange={(e)=>setaddedby(e.target.value)}></input></label></div>
    <button type="submit" onClick={()=>handleaddbook()}><h3>Submit</h3></button></div>
    </>


    );}