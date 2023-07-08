import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut, reset } from "../features/authSlice";

const LayoutNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="pt-2">
      <button
        onClick={logout}
        className="button bg-slate-600 text-white rounded-md px-2 ml-2 font-bold hover:bg-red-600"
      >
        Log out
      </button>
    </div>
  );
};

export default LayoutNav;
