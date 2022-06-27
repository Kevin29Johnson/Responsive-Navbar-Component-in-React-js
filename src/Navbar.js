import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
const Navbar=()=>{
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerwidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
       <nav>
           { (toggle || screenWidth > 750) &&
              (<ul>
              <li>
                 <Link className="links" to="/">
                   Home
                 </Link>
               </li>
               <li>
                 <Link className="links" to="/about">
                   About
                 </Link>
               </li>
               <li>
                 <Link className="links" to="/contact">
                   Contact
                 </Link>
               </li>
              
                </ul>)
           }
           <button onClick={() => {
          setToggle(!toggle);
        }}><ReorderIcon/></button>
         </nav>
  )
  
}

export default Navbar;
