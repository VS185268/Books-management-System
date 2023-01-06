import React from "react";
import Navbar from "./Navbar";
function Dashboard(){
    return(<>
    <Navbar/>
        <div><button type="button" className="Profile"><h2>Profile </h2></button></div>
        <br></br>
        <div><button type="button" className="lstbooks"><h2>List Of Books </h2></button></div>
        <br>
        </br>
        <div><button type="button" className="Add_book"><h2>Add Book</h2></button></div>
        <br></br>
        <div><button type="button" className="Del_book"><h2>Delete Book </h2></button></div>
        <br></br>
        <div><button type="button" className="Logout"><h3>Logout</h3></button></div>
        </>
    );
}
export default Dashboard;