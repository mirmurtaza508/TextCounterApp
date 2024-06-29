import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.enableDarkMode("primary")}} style={{height:"30px",width: "30px"}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.enableDarkMode("danger")}} style={{height:"30px",width: "30px"}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.enableDarkMode("success")}} style={{height:"30px",width: "30px"}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.enableDarkMode("warning")}} style={{height:"30px",width: "30px"}}></div>

        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */
        
        <div className="form-check form-switch">
               <input className="form-check-input" type="checkbox" onClick={()=>{props.enableDarkMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
               <label className={`form-check-label text-${props.Mode === "light" ? "black" : "white"}`}    htmlFor="flexSwitchCheckDefault">toggle mode</label>
</div>}
      </div>
    </div>
  </nav>
  )
}
// let mode1 = "light";
// function mode(){
//   if(mode1 === "light"){
//     document.body.firstChild.style.background = "white"
//     document.body.style = "black";
//     mode1 = "dark"; 
//   }else{
//     document.body.firstChild.style.background = "black";
//     document.body.style = "white";
//     mode1 = "light";
//   }
// }
Navbar.prototype = {title : PropTypes.string.isRequired,
aboutText : PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title : "set title here",
  aboutText : "About text here"
}