import React, { useState } from "react";
import coding from "../assets/images/coding.png";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../store/features/auth/authSlice';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    email: '',
    password: ''
  });
};
  const { firstName, lastName, email, password } = formData;

  const navigate = useNavigate();

  const dispatch = useDispatch();

   const {use, isLoading, isSuccess, message} = useSelector((state) => state.auth)


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!password.includes('@')) {
      toast.error('Password must contain an "@" symbol');
   } else {
    const userData = {
      firstName,
      lastName,
       email,
       password
    }
    dispatch (register(userData))
   }

    

  return (
    <div className="signup_mail flex justify-center items-center h-screen m-0 font-sans bg-background-color">
      <div className="signup_form flex w-[70%] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
        <img
          className="developer_avatar w-6/12 bg-main-color object-cover"
          src={coding}
          alt="developer_avatar"
        />

        <form onSubmit={onSubmit} className="w-6/12 p-5 flex flex-col justify-center">
          <h1 className="mb-5 text-primary-text-button-color font-bold text-center text-[32px]">
            Join Coders Now!
          </h1>   

          <input
              type="text"
              id="first_name"
              placeholder="First Name"
              className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
              value={firstName}
              onChange={onChange}

            />




          <input
              type="text"
              id="last_name"
              placeholder="Last Name"
              className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
              value={lastName}
              onChange={onChange}

            />






          <input
            type="email"
            id="email"
            placeholder="Email"
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
            value={email}
            onChange={onChange}
          />

          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
            value={password}
            onChange={onChange}
          />

          <input
            type="submit"
            id="submit"
            value="Sign Up"
            className="bg-[#007BFF] text-white mb-[15px] p-2.5 border-solid"
          />
          <p className="mt-2.5 text-center text-[#666666]">
            New to code CLA? <br />
            <Link
               to="/login"
               className="text-[#007BFF] no-underline">
           
                Login
             </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
