import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5" id="contact">
      <h2>Contact</h2>
      <div className="">
        <div class="row mb-3 w-50 d-flex justify-content-center">
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="colFormLabelSm"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="row mb-3 w-50 d-flex justify-content-center">
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="colFormLabel"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="row mb-3 w-50 d-flex justify-content-center">
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="colFormLabel"
              placeholder="subject"
            />
          </div>
        </div>
        <div class="row mb-3 w-50 d-flex justify-content-center">
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabel"
              placeholder="Your Massage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
