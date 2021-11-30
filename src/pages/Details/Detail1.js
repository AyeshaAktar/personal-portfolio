import React from "react";
import "./Details.css";
import carGallery from "../../images/car-gallery.JPG";
import products from "../../images/car-products.JPG";
import dashboard from "../../images/car-dashboard.JPG";

const Detail1 = () => {
  return (
    <div className="container">
      <h1 className="my-5">Car Gallery</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img className="images" src={carGallery} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="images" src={products} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="images" src={dashboard} alt="" />
          </div>
        </div>
      </div>
      <div className="text-start my-5">
        <ul>
          <li>
            This website is about to car selling. In this website user can buy a
            car via online.
          </li>
          <li>
            Admin can manage whole website but user can only manage orders and
            review products..
          </li>
          <li>
            In authentication system use email & password for login/signup also
            use google login.
          </li>
          <li>
            Using Bootstrap, CSS3, React, Firebase, MongoDB, Node Js, Express
            Js, Heroku.
          </li>
        </ul>
        <a href="https://github.com/AyeshaAktar/car-gallery">
          <button className="btn btn-secondary">Code Link</button>
        </a>
      </div>
    </div>
  );
};

export default Detail1;
