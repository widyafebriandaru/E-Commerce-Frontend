import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 shadow">
        <ul className="menu-list">
          <li>
            <NavLink
              to={"/"}
              className="text-blue-500 hover:text-blue-600"
              activeClassName="text-blue-600"
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/products"}
              className="text-blue-500 hover:text-blue-600"
              activeClassName="text-blue-600"
            >
              Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink
                  to={"/users"}
                  className="text-blue-500 hover:text-blue-600"
                  activeClassName="text-blue-600"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <ul className="menu-list">
          <li>
            <button
              onClick={logout}
              className="button bg-white text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
