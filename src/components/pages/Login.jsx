import { useEffect, useState } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../../features/authSlice";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [registrationData, setRegistrationData] = useState({
    acceptTerms: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistrationDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log("Logging in with email:", email, "and password:", password);
    dispatch(loginUser({ email, password }));
  };

  
  const toggleLoginRegister = () => {
    setShowLogin(!showLogin);
  };
  
  // const handleRegistration = (e) => {
  //   e.preventDefault();
  //   // Handle registration logic
  //   console.log("Registering with data:", registrationData);
  // };

  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/users", {
        fullName: name,
        email: regEmail,
        password: regPassword,
        confPassword: confPassword,
        phone: phone,
        accountType: "customer",
      });
      toggleLoginRegister();
      alert("Register Success, please login to your account")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 via-black to-white bg-right-bottom">
        <div className="bg-white shadow-lg rounded p-8 m-28">
          {isError && <h1 className="">{message}</h1>}
          {showLogin ? (
            <form onSubmit={handleLogin}>
              <p>{msg}</p>
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              <div className="mb-4">
                <label className="block mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-600 to-black text-white rounded px-4 py-2"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>

              <p className="mt-4">
                Do not have an account?{" "}
                <a
                  href="#"
                  onClick={toggleLoginRegister}
                  className="text-gray-600 underline"
                >
                  Register here
                </a>
              </p>
            </form>
          ) : (
            <form onSubmit={saveUser}>
              <h2 className="text-2xl font-bold mb-6">Register</h2>
              <div className="mb-4">
                <label className="block mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={registrationData.acceptTerms}
                    onChange={handleRegistrationDataChange}
                    required
                  />
                  Accept terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-600 to-black text-white rounded px-4 py-2"
              >
                Register
              </button>
              <p className="mt-4">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={toggleLoginRegister}
                  className="text-gray-600 underline"
                >
                  Back to Login
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
