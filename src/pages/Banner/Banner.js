import React from "react";
import "./Banner.css";
import banner from "../../images/banner-2.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-bg text-white d-flex align-items-center justify-content-start">
        <div className="my-info">
          <h1 className="mb-4 welcome">Welcome</h1>
          <h1>I am Ayesha Akter</h1>
          <h1>I am a Web Developer</h1>
          <a href="https://drive.google.com/file/d/1Gda5jIes7ZZv1Ep7m6raDCZ9iHiIxxra/view?usp=sharing">
            {" "}
            <button className="btn btn-light fw-bold mt-4">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
