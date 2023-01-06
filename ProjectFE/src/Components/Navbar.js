import './styles.css'
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
export default function Navbar(){
    const navigate=useNavigate();
    return (
        <nav className="nav">
        <ul>
            <li><a href="/Profile">Profile</a>
            </li>
            <li><a href="/ListOfBooks">List Of Books</a>
                </li>
                <li><a href="/AddBook"> Add Books</a></li>
                
                
                <li><a href='/analytics'>Books Analytics</a></li>
                <li><a href='/analytics1'>Users Analytics</a></li>
                <li><a href="/Logout">Log Out</a></li>
        </ul>
        </nav>
                
    );
}