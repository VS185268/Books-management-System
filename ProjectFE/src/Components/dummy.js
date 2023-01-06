export default function Dummy()
{ return(<>
    <Navbar/>
   <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Register/>}/>

      <Route exact path='/ListOfBooks' element={<Listofbooks/>}/>
      <Route exact path='/AddBook' element={<AddBook/>}/>
      <Route exact path='/DeleteBook' element={<Deletebook/>}/>
      <Route exact path='/Logout' element={<Logout/>}/>
      </Routes>
   </BrowserRouter></>
);

}