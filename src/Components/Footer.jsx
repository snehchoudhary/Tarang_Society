


// import React from "react";
// import './footer.css';
// import { FaLinkedin, FaInstagram} from "react-icons/fa";
// import BPSMV_logo from '../assets/BPSMV_logo.jpg';
// import Tarang_logo from '../assets/Tarang_logo.jpg';

// const GmailIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//   </svg>
// );

// const Footer = () => {
//   return (
//     <div className="footer">
//      <div className="footer-logos">
//      <div className="BPS-logo">
//        <img src= {BPSMV_logo} alt="BPSMV" />
//      </div>

//      <div className="Tarang-logo">
//       <img src={Tarang_logo} alt="Tarang" />
//      </div>
//        </div>
//      <div className="text">
//       <h2>Building a vibrant student community at BPSMV, Khanpur Kalan.</h2>
//       <h3>Department of Computer Science & Information Technology.</h3>
//      </div>

//      <div className="contact">
//             <a href="https://www.linkedin.com/company/tarang-cse-it-bpsmv/posts/?feedView=all"><FaLinkedin /></a>
//             <a href="https://www.instagram.com/tarang_cse.it?igsh=ZzdpM3YyYzUydmox"><FaInstagram /></a>  
//             <a href="#"><GmailIcon /></a>
//      </div>
//      </div>
//   )
// }
// export default Footer;


import React from "react";
import "./footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import BPSMV_logo from "../assets/BPSMV_logo.jpg";
import Tarang_logo from "../assets/Tarang_logo.jpg";

const GmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={BPSMV_logo} alt="BPSMV" />
        </div>

        <div className="footer-text">
          <h2>Building a vibrant student community at BPSMV, Khanpur Kalan.</h2>
          <h3>Department of Computer Science & Information Technology</h3>
        </div>

        <div className="footer-logo">
          <img src={Tarang_logo} alt="Tarang" />
        </div>
      </div>

      <div className="contact">
        <a
          href="https://www.linkedin.com/company/tarang-cse-it-bpsmv/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/tarang_cse.it?igsh=ZzdpM3YyYzUydmox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="mailto:tarangcseit@bpswomenuniversity.ac.in" target="_blank" rel="noopener noreferrer">
          <GmailIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
