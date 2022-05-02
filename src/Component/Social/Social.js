import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import auth from '../../firebase.init';
import useToken from './../hooks/useToken';

const Social = () => {
    const navigate=useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token]=useToken(user)

    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }

    if (token) {
      toast.success("Login success", { id: "login" });
      navigate(from, { replace: true });
    }

    return (
      <div>
        {loading && (
          <p className="flex justify-center items-center">
            <CircleLoader color="blue" size={60} />
          </p>
        )}
        {error && <p className="text-center text-red-600">{error?.message}</p>}
        <div className="flex items-center mx-8">
          <div className="bg-gray-400 w-1/2 h-[1px]"></div>
          <p className="mx-3">Or</p>
          <div className="bg-gray-400 w-1/2 h-[1px]"></div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="border px-16 py-2 my-5 rounded-2xl"
          >
            <FcGoogle className='inline text-3xl mr-4'/>
            Continue With Google
          </button>
        </div>
      </div>
    );
};

export default Social;