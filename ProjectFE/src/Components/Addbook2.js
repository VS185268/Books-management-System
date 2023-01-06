import axios from "axios";
import { useState } from "react";

export default function AddBook2()
{
//const navigate=useNavigate();
const [booktype,setbooktype]=useState("");
const [author,setauthor]=useState("");
const [noofbook,setnoofbooks]=useState(0);
const [addedby,setaddedby]=useState("");
const handleAddBook=()=>{
const data={
    booktype:booktype,
    author:author,
    noofbook:noofbook,
    addedby:addedby
}
const url="https://localhost:44319/api/Main/AddingBook";
axios.post(url,data).then(res=>console.log(res)).catch(Error)
}

    return(
        <>
        <nav className="nav" ><div
         style={{display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         height: '8vh',}}
        ><h2>Add Book</h2></div>
        </nav>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"2rem",
            height:'7vh'
        }}>
        <label><h2>Book Type </h2></label> 
        
        <input type="Text" value={booktype} onChange={(e)=>setbooktype(e.target.value)}></input></div>
        
        

        <br></br>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            marginRight:'2.5rem',
            gap:"2rem",
            height:'7vh'
        }}>
        <label><h2>Author </h2></label>
        <input type="Text" value={author} onChange={(e)=>setauthor(e.target.value)}></input></div>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            marginLeft:"1rem",
            gap:"2rem",
            height:'7vh'
        }}>
        <label className="noofbooks"><h2>No Of Books </h2></label><input type="number" value={noofbook} onChange={(e)=>setnoofbooks(e.target.value)}></input></div>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            marginLeft:"2rem",
            gap:"2rem",
            height:'7vh'
        }}>
        <label className="Addedby"><h2>Added Person </h2></label><input type="text" value={addedby} onChange={(e)=>setaddedby(e.target.value)}></input></div>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"2rem",
            height:'7vh'
        }}>
        <button type="submit" onClick={handleAddBook}>Submit </button></div>
        </>
    );

}