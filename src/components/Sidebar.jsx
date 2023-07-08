import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="pl-2">
        <ul className="">
          <li>
            <NavLink
              to={"/"}
              className="text-slate-500 hover:text-black font-bold w-full"
              activeClassName="text-blue-600"
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/products"}
              className="text-slate-500 hover:text-black font-bold w-full"
              activeClassName="text-blue-600"
            >
              Products
            </NavLink>
          </li>
        </ul>
        {/* {user && user.role === "admin" && (
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
        )} */}
      </aside>
    </div>
  );
};

export default Sidebar;
