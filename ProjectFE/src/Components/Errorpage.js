import { useNavigate } from "react-router-dom";
export default function Errorpage()
{
const navigate=useNavigate();
const handlefun=()=>{
    navigate('/login');
};
return(<div><h2>Sorry!!! Login Failed</h2>
<button onClick={handlefun}>Re-Login</button></div>);
}