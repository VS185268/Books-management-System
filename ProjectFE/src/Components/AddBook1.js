import {React,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function AddBook1 ()
{const navigate=useNavigate();
const [booktype,setbooktype]=useState("");
const [author,setauthor]=useState("");
const [noofbook,setnoofbooks]=useState();
const [addedby,setaddedby]=useState("");
const handleAddBook = ()=>{
    const data = {
        booktype:booktype,
           author:author,
           noofbook:noofbook,
           addedby:addedby}



    const url = "https://localhost:44319/api/Main/AddBook";
    axios.post(url,data).then(res=>
        {console.log(res.data)
            

        }).catch(Error)
        
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
    <label>BookType <input type="Text" onChange={(e)=>setbooktype(e.target.value)}></input></label>
    <br></br>
    <div><label className="Text" onChange={(e)=>setauthor(e.target.value)}>Author <input type="Text"></input></label></div>
    <div><label className="noofbooks">No Of Books <input type="number" onChange={(e)=>setnoofbooks(e.target.value)}></input></label></div>
    <div> <label className="Addedby">Added Person <input type="text" onChange={(e)=>setaddedby(e.target.value)}></input></label></div>
    <button type="submit" onClick={handleAddBook}><h3>Submit</h3></button></div>
    </>


    );    


}