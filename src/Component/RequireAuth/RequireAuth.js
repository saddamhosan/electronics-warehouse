import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();


  if (loading) {
    return (
      <p className="flex justify-center">
        <ScaleLoader color="blue" size={60} />
      </p>
    );
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
