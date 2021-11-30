import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container mt-5" id="contact">
      <h2 className="my-5">Contact</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="">
            <h4>
              <MdEmail /> Email
            </h4>
            <p>ayeshaaktar491@gmail.com</p>
            <h4>
              <BsFillTelephoneFill /> Phone
            </h4>
            <h6>+88016********</h6>
          </div>
        </div>
        <div className="col-md-8">
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabelSm"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="subject"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control form-control-lg"
                id="colFormLabel"
                placeholder="Your Massage"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-secondary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
