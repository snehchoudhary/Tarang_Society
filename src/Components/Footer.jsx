


import React from "react";
import './footer.css';
import { FaLinkedin, FaInstagram} from "react-icons/fa";

const GmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-logos">
     <div className="BPS-logo">
       <img src="/BPSMV Logo.jpg" alt="BPSMV" />
     </div>

     <div className="Tarang-logo">
      <img src="/Tarang Logo1.png" alt="Tarang" />
     </div>
       </div>
     <div className="text">
      <h2>Building a vibrant student community at BPSMV, Khanpur Kalan.</h2>
      <h3>Department of Computer Science & Information Technology.</h3>
     </div>

     <div className="contact">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>  
            <a href="#"><GmailIcon /></a>
     </div>
     </div>
  )
}
export default Footer;
