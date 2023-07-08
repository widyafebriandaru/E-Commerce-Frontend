import { useEffect, useState } from "react";
import { getMe } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [fullName, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${user.id}`);
        const userData = response.data;
        setFullname(userData.fullName);
        setPhone(userData.phone);
        setPassword(userData.password);
        setConfPassword(userData.confPassword);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [user.id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/users/${user.id}`, {
        fullName: fullName,
        phone: phone,
        password: password,
        confPassword: confPassword,
      });
      navigate("/user");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleBack = () => {
    navigate("/user");
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        <h2 className="text-xl font-bold">Edit Profile</h2>
        <button
          className="bg-slate-400 text-white px-2 py-1 rounded-md font-semibold hover:bg-slate-600  hover:scale-110 transition ease-in-out duration-[350ms]"
          onClick={handleBack}
        >
          Back
        </button>
        <div className="shadow-md p-6">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="text-center">{msg}</p>
              <div className="my-4">
                <label className="block font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full"
                  value={fullName}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="my-4">
                <label className="block font-bold mb-2">Phone</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div className="my-4">
                <label className="block font-bold mb-2">Password</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
              <div className="my-4">
                <label className="block font-bold mb-2">Confirm Password</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="my-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
