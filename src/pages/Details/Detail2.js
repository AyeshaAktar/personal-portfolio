import React from "react";
import "./Details.css";
import camping from "../../images/camping.JPG";
import campingAdvabture from "../../images/camping-advanture.JPG";
import campingManage from "../../images/camping-manage.JPG";

const Detail2 = () => {
  return (
    <div className="container">
      <h2 className="my-5">Camping Village</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img className="images" src={camping} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="images" src={campingAdvabture} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="images" src={campingManage} alt="" />
          </div>
        </div>
      </div>
      <div className="text-start my-5">
        <ul>
          <li>
            This Website is about to traveling. In this website user can book
            tent for their better camping tour.
          </li>
          <li>
            Admin can manage all services and bookings. Also add new services.
          </li>
          <li>In authentication system use google login for login/signup.</li>
          <li>
            Using Bootstrap, CSS3, React, Firebase, MongoDB, Node Js, Express
            Js, Heroku.
          </li>
        </ul>
        <a href="https://github.com/AyeshaAktar/tourism">
          <button className="btn btn-secondary">Code Link</button>
        </a>
      </div>
    </div>
  );
};

export default Detail2;
