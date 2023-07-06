import React, {useEffect} from "react";
import { logOut, reset, getMe } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };
  
  return (
    <>
      <div>UserProfile</div>
      <button onClick={logout} className="button bg-white text-gray-700">
        Log out
      </button>
    </>
  );
};

export default UserProfile;
