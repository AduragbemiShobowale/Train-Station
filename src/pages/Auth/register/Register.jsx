import React from "react";
import signUpImage from "../../assets/image/signUp.png";

const Register = () => {
  return (
    <div className="mainContainer flex gap-8">
      <div className="accountContainer flex flex-col gap-8 text-start max-w-xl">
        <div className="firstBox flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">Welcome to NRC</h1>
          <p>Fill the information below to create a new account</p>
        </div>
        <form action="">
          <div className="secondBox flex flex-col gap-7">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Date of Birth</label>
                <input
                  type="date"
                  placeholder="Select date"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">Gender</label>
                <select
                  name=""
                  id=""
                  className="w-3xs h-14 border-2 rounded-md"
                >
                  <option value="">Select gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Identification Type</label>
                <select
                  name=""
                  id=""
                  className="w-3xs h-14 border-2 rounded-md"
                >
                  <option value="">Select Identification type</option>
                  <option value="">BVN</option>
                  <option value="">NIN</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">ID Number</label>
                <input
                  type="text"
                  placeholder="Enter id number"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-3xs h-14 border-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="" className="w-lg text-lg/7 font-normal">
                By proceeding with the registration, I confirm that I have read
                and accept the <a href="">Privacy Policy</a> and{" "}
                <a href="">Terms of Service</a>.
              </label>
            </div>
          </div>
        </form>
        <div className=" flex flex-col gap-2.5 thirdBox">
          <button
            className="w-lg bg-green-500
 text-white p-2.5 rounded-lg"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account? <a href="">Sign in</a>{" "}
          </p>
        </div>
      </div>

      <div className="imgContainer">
        <img className="signUpImage" src={signUpImage} alt="" />
      </div>
    </div>
  );
};

export default Register;
