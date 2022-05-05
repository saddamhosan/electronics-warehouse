import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import useToken from './../hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

      const [token]=useToken(user)

    const [updateProfile, updating, UPerror] = useUpdateProfile(auth);

    const handleSignOut = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast.success("Verification mail sent", { id: "veri" });
        e.target.reset();
      } else {
        toast.error("password miss match",{id:'miss'});
      }
    };

    if (token) {
      toast.success("Login success", { id: "login" });
      
      navigate(from, { replace: true });
    }
    return (
      <div className="w-11/12 my-4 md:w-2/5 mx-auto font-serif border rounded-2xl py-5">
        <Helmet>
          <title>Register - E warehouse</title>
        </Helmet>
        <h1 className="text-center text-2xl text-blue-500 font-bold my-3">
          Please Register
        </h1>
        <form onSubmit={handleSignOut} className="w-10/12 mx-auto">
          <input
            className="border p-2 my-3 rounded-lg w-full"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <input
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
            className="border p-2 my-3 rounded-lg w-full"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />

          <div className="flex justify-center mt-3">
            <input
              className="bg-blue-600 text-white text-xl font-bold px-8 py-2 rounded-xl cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
          {(loading || updating) && (
            <p className="flex justify-center">
              <CircleLoader color="blue" size={60} />
            </p>
          )}
          {(error || UPerror) && (
            <p className="text-center text-red-600">{error?.message}</p>
          )}
        </form>
        <p className="text-xl text-center my-3">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-orange-500 cursor-pointer"
          >
            Login
          </span>
        </p>

        <Social />
      </div>
    );
};

export default SignUp;