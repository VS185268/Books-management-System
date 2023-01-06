// import logo from './logo.svg';
import './App.css';
// import Registration from './Components/Registration';
// import Login from './Components/Login';
import React,{useState} from 'react';




import Dashboard from './Components/Dashboard';

import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import AddBook from './Components/AddBook';
import Deletebook from './Components/Deletebook';
import Logout from './Components/Logout';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Registration from './Components/Registration';
import Listofbooks from './Components/ListofPosts';
import Main from './Components/Main';
import Login from './Components/Login';
import Errorpage from './Components/Errorpage';
import Analytics from './Components/Analytics';
import AddBook1 from './Components/AddBook1';
import Registeranalytics from './Components/Registeranalytics';
import AddBook2 from './Components/Addbook2';
import Addbook4 from './Components/Addbook4';


function App() {
 return(<>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Navbar/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/listofbooks' element={<Listofbooks/>}/>
      <Route path='/addbook' element={<Addbook4/>}/>
      <Route path='/deletebook' element={<Deletebook/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/errorpage' element={<Errorpage/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/analytics1' element={<Registeranalytics/>}/>
      
   </Routes>
   </BrowserRouter>
  </> 
 );
  
}


export default App;
