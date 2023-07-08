import  {useEffect, useState} from "react";
import { logOut, reset, getMe } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);

    const logout = () => {
      dispatch(logOut());
      dispatch(reset());
      navigate("/");
      window.location.reload();
    };
    

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${user.id}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);


  return (
    <>
    <div className="bg-slate-600 h-[57px]">
          <Header />
        </div>
        <div className="my-10 ml-5">
      <div className="text-2xl font-bold">User Profile</div>
      <div>Name : {data.fullName}</div>
      <div>Email : {data.email}</div>
      <div>Phone : {data.phone}</div>
      <div className="flex gap-5 text-black font-semibold">
      <button className="px-3 py-3 bg-slate-300 rounded-lg hover:text-white hover:bg-slate-600" onClick={() => navigate("/update-profile")}>Edit Profile</button>
      <button onClick={logout} className="px-3 py-3 bg-slate-300 hover:text-white hover:bg-red-600 rounded-lg">
        Log out
      </button>
      </div>
      </div>
    </>
  );
};

export default UserProfile;
