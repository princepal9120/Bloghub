import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
          className="py-2 px-5 text-white button-custom rounded-xl shadow-lg duration-200 hover:drop-shadow-3xl hover:shadow-[#ede8e8] hover:cursor-pointer"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
