import React from "react";
import signUpImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import "./Register.css";

const Register = () => {
  return (
    <div class="mainContainer">
      <div class="logo">
        <img src={trainLogo} alt="" />
      </div>
      <div class="accountContainer">
        <div class="firstBox">
          <h1 class="">Welcome to NRC</h1>
          <p>Fill the information below to create a new account</p>
        </div>
        <form action="">
          <div class="secondBox">
            <div class="">
              <div class="">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter first name" class="" />
              </div>
              <div class="">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Enter last name" class="" />
              </div>
            </div>
            <div class="">
              <div class="">
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="Enter phone number" class="" />
              </div>
              <div class="">
                <label htmlFor="">Date of Birth</label>
                <input type="date" placeholder="Select date" class="" />
              </div>
            </div>
            <div class="">
              <div class="">
                <label htmlFor="">Gender</label>
                <select name="" id="" class="">
                  <option value="">Select gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
              <div class="">
                <label htmlFor="">Identification Type</label>
                <select name="" id="" class="">
                  <option value="">Select Identification type</option>
                  <option value="">BVN</option>
                  <option value="">NIN</option>
                </select>
              </div>
            </div>
            <div class="">
              <div class="">
                <label htmlFor="">ID Number</label>
                <input type="text" placeholder="Enter id number" class="" />
              </div>
              <div class="">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  class=""
                />
              </div>
            </div>
            <div class="">
              <div class="">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter password" class="" />
              </div>
              <div class="">
                <label htmlFor="">Confirm Password</label>
                <input type="password" placeholder="Enter password" class="" />
              </div>
            </div>
            <div class="">
              <input type="checkbox" />
              <label htmlFor="" class="">
                By proceeding with the registration, I confirm that I have read
                and accept the <a href="">Privacy Policy</a> and
                <a href="">Terms of Service</a>.
              </label>
            </div>
          </div>
        </form>
        <div class="thirdBox">
          <button>Sign Up</button>
          <p>
            Already have an account? <a href="">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
