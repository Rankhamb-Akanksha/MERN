import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Information from "./Information";

function Layout() {
  const navigate = useNavigate();
//   const loca = useLocation();
  const [name, setName] = React.useState("AR");
  const [info, setInfo] = React.useState(
    "We call ourself full-Stack developer"
  );
  const [contact, setContact] = React.useState([
    { place: "Pune", status: "amazing" },
    { place: "Mumbai", status: "budlay" },
  ]);
  const [prod, setProducts] = React.useState([
    { productName: "T-shirt", size: "XL", color: "Black" },
    { productName: "Puma-Shoes", size: "7", color: "Grey" },
  ]);
 
  return (
    <div>
      <nav class="bg-purple-400 text-black flex justify-between">
        <ul class="flex space-x-9">
          <Link to="/home" state={name} >
            <li>Home</li>
          </Link>
          <Link to="/Contacts" state={contact}>
            <li>Contacts</li>
          </Link>
          <Link to="/Information" state={info}>
            <li>Information</li>
          </Link>
          <Link to="/Proudcts">
            <li>Proudcts</li>
          </Link>
        </ul>
      </nav>

      
    </div>
  );
}

export default Layout;
