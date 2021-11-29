import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            AYESHA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link active" href="#about">
                About
              </a>
              <a class="nav-link active" href="#service">
                Services
              </a>
              <a class="nav-link active" href="#projects">
                Projects
              </a>
              <a class="nav-link active" href="#">
                Education
              </a>
              <a class="nav-link active" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
