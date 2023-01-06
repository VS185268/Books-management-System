import { useNavigate } from "react-router-dom"
export default function Logout(){
    const navigate=useNavigate();
    const handlelogin=()=>{
navigate('/login');
    }
    return(<>
    <div><h1>Thank You For Visiting Us</h1>
    <label >To Revisit <button type="button" onClick={handlelogin}>Login</button></label></div>
    </>)
}