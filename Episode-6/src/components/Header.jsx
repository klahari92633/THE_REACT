import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {


  const [btnNamereact,setbtnNamereact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
      src= {LOGO_URL}
      alt="logooo"
       className="restaurant-logo"
/>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button className="login" 
          onClick={()=>{
               btnNamereact === "Login"?setbtnNamereact("Logout"):setbtnNamereact("Login");

          }}
          >
            {btnNamereact}</button></li>
        </ul>
      </div>
    </div>
  );
};


export default Header;