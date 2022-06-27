import React from "react";
import "./Footer.css";
const Footer=()=>{
  const d = new Date();
    let year = d.getFullYear();
  return (
    <div className="footer">
      <p>Copyright &copy; {year}</p>
      </div>
  )
}
export default Footer;
