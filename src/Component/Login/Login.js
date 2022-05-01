import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import useToken from './../hooks/useToken';


const Login = () => {
    const [email,setEmail]=useState('')
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, reSetPassError] =
        useSendPasswordResetEmail(auth);

        const [token]=useToken(user)

    const handleLogin = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      await signInWithEmailAndPassword(email, password);
    };
    const handleResetPass=async()=>{
       await sendPasswordResetEmail(email)
       toast.success("Email sent", { id: "login" });
    }
    if (token) {
      toast.success("Login success", { id: "login" });
      navigate(from, { replace: true });
    }
    return (
      <div className="w-2/5 mx-auto font-serif border rounded-2xl py-5">
        <h1 className="text-center text-2xl text-blue-500 font-bold my-3">
          Please Login
        </h1>
        <form onSubmit={handleLogin} className="w-10/12 mx-auto">
          <input
            onBlur={handleEmail}
            className="border p-2 my-3 rounded-lg w-full"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            className="border p-2 my-3 rounded-lg w-full"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <input
            className="bg-blue-600 text-white text-xl font-bold px-8 py-2 rounded-xl"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-xl text-center my-3">
          Don't have an account?
          <span
            onClick={() => navigate("/signUp")}
            className="text-orange-500 cursor-pointer"
          >
            Create an account
          </span>
        </p>
        <p className="text-xl text-center my-3">
          Forget password?
          <span
            onClick={handleResetPass}
            className="text-orange-500 cursor-pointer"
          >
            Reset Password
          </span>
        </p>

        {(loading || sending) && (
          <p className="flex justify-center">
            <CircleLoader color="blue" size={60} />
          </p>
        )}
        {(error || reSetPassError) && (
          <p className="text-center text-red-600">
            {error?.message} {reSetPassError?.message}
          </p>
        )}
        <Social />
      </div>
    );
};

export default Login;