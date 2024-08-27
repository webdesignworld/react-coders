import React from "react";
import coding from "../assets/images/coding.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <div class="signup_mail flex justify-center items-center h-screen m-0 font-sans bg-background-color">
        <div class="signup_form flex w-[70%] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
          <img
            class="developer_avatar w-6/12 bg-main-color object-cover"
            src={coding}
            alt="developer_avatar"
          />

          <form
            id="signupForm"
            action=""
            class="w-6/12 p-5 flex flex-col justify-center"
          >
            <h1 class="mb-5 text-primary-text-button-color font-bold text-center text-[32px]">
              Join Coders Now!
            </h1>

            <input
              type="text"
              id="fname"
              placeholder="First Name"
              class="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
            />
           

            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              class="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
            />
           

            <input
              type="text"
              id="email"
              placeholder="Email"
              class="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
            />
         
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
            />
          
            <input
              type="submit"
              id="submit"
              value="Sign Up"
              class="bg-[#007BFF] text-white mb-[15px] p-2.5 border-solid"
            />
            <p class="mt-2.5 text-center text-[#666666]">
              Already have an account?
              <br />
              <Link
                to="/login"
                target="_blank"
                class="text-[#007BFF] no-underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
