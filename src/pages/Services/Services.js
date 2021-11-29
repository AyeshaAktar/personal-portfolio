import React from "react";
import "./Services.css";
import webDesign from "../../images/web-design.jpg";
import webDevelopment from "../../images/web-dev.png";
import responsive from "../../images/responsive.jpg";

const Services = () => {
  return (
    <div id="service">
      <div className="container">
        <h2 className="mt-5">My Services</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div class="col">
            <div class="card border-0">
              <div className="">
                <img
                  src={webDesign}
                  class="card-img-top rounded-circle w-50 image"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Web Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ex odit eveniet unde quaerat aliquid eos voluptate
                  incidunt ad, est consectetur deleniti amet velit et alias aut?
                  Voluptatum, molestiae.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <div className="">
                <img
                  src={responsive}
                  class="card-img-top rounded-circle w-50 image"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Responsive Design</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ex odit eveniet unde quaerat aliquid eos voluptate
                  incidunt ad, est consectetur deleniti amet velit et alias aut?
                  Voluptatum, molestiae.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <div className="">
                <img
                  src={webDevelopment}
                  class="card-img-top rounded-circle w-50 image"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ex odit eveniet unde quaerat aliquid eos voluptate
                  incidunt ad, est consectetur deleniti amet velit et alias aut?
                  Voluptatum, molestiae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
