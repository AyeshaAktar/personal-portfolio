import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer py-4 mt-5">
      <div className="social-icon d-flex gap-2 justify-content-center mb-3">
        <button className="btn btn-light rounded-circle">
          <FaFacebookF />
        </button>
        <button className="btn btn-light rounded-circle">
          <AiFillLinkedin />
        </button>
        <button className="btn btn-light rounded-circle">
          <BsYoutube />
        </button>
      </div>

      <p className="text-white">copyright &copy; 2021</p>
    </div>
  );
};

export default Footer;
