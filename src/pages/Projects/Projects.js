import React from "react";
import carGallery from "../../images/car-gallery.JPG";
import camping from "../../images/camping.JPG";
import eyeCare from "../../images/eye-care.JPG";

const Projects = () => {
  return (
    <div className="container">
      <h2 className="mt-5" id="projects">
        My Projects
      </h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div className="">
              <img src={carGallery} class="card-img-top image" alt="..." />
            </div>
            <div class="card-body text-start">
              <h3 class="card-title">Car Gallery</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ex odit eveniet unde quaerat aliquid eos voluptate incidunt ad,
                est consectetur deleniti amet velit et alias aut? Voluptatum,
                molestiae.
              </p>
              <a href="https://car-gallery-84b3b.web.app/">
                <button className="btn btn-primary text-dark">Live site</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div className="">
              <img src={camping} class="card-img-top image" alt="..." />
            </div>
            <div class="card-body text-start">
              <h3 class="card-title">Camping Village</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ex odit eveniet unde quaerat aliquid eos voluptate incidunt ad,
                est consectetur deleniti amet velit et alias aut? Voluptatum,
                molestiae.
              </p>
              <a href="https://tourism-fb936.web.app/">
                <button className="btn btn-primary text-dark">Live site</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div className="">
              <img src={eyeCare} class="card-img-top image" alt="..." />
            </div>
            <div class="card-body text-start">
              <h5 class="card-title">Optic Eye-Care</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ex odit eveniet unde quaerat aliquid eos voluptate incidunt ad,
                est consectetur deleniti amet velit et alias aut? Voluptatum,
                molestiae.
              </p>
              <a href="https://eye-care-6dca3.web.app/">
                <button className="btn btn-primary text-dark">Live site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
