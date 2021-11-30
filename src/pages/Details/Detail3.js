import React from "react";
import "./Details.css";
import eyeCare from "../../images/eye-care.JPG";
import eyeService from "../../images/eye-service.JPG";
import eyeBlog from "../../images/eye-blog.JPG";

const Detail3 = () => {
  return (
    <div className="container">
      <h1 className="my-5">Optic Eye Care</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img className="images" src={eyeCare} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="images" src={eyeService} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="images" src={eyeBlog} alt="" />
          </div>
        </div>
      </div>
      <div className="text-start my-5">
        <ul>
          <li>
            This website is about health care. In this website we care about
            your eye. And provide some free eye care tips for your better eye.
          </li>
          <li>
            In authentication system use email & password for login/signup also
            use google login.
          </li>
          <li>Using Bootstrap, CSS3, React, Firebase.</li>
        </ul>
        <a href="https://github.com/AyeshaAktar/health-care">
          <button className="btn btn-secondary">Code Link</button>
        </a>
      </div>
    </div>
  );
};

export default Detail3;
