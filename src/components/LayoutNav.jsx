import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    <div>
      <nav
        className="navbar fixed-top shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  onClick={logout}
                  className="button bg-white text-gray-700"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LayoutNav;
