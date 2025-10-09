import { FaGithub } from "react-icons/fa6";

import logoImage from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-[#9F62F2] hover:border-b-2 hover:border-[#9F62F2] ">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9F62F2] border-b-2 border-[#9F62F2] transition duration-200"
                    : "border-b-2 border-transparent hover:text-[#9F62F2] hover:border-[#9F62F2] transition duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-[#9F62F2] hover:border-b-2 hover:border-[#9F62F2] ">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9F62F2] border-b-2 border-[#9F62F2] transition duration-200"
                    : "border-b-2 border-transparent hover:text-[#9F62F2] hover:border-[#9F62F2] transition duration-200"
                }
              >
                Apps
              </NavLink>
            </li>
            <li className="hover:text-[#9F62F2] hover:border-b-2 hover:border-[#9F62F2] ">
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9F62F2] border-b-2 border-[#9F62F2] transition duration-200"
                    : "border-b-2 border-transparent hover:text-[#9F62F2] hover:border-[#9F62F2] transition duration-200"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost text-xl text-[#9F62F2]">
            {" "}
            <img src={logoImage} alt="Hero.IO logo" className="w-6 h-6" />{" "}
            Hero.IO
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-[#9F62F2] border-b-2 border-[#9F62F2] transition duration-200"
                  : "border-b-2 border-transparent hover:text-[#9F62F2] hover:border-[#9F62F2] transition duration-200"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9F62F2] border-b-2 border-[#9F62F2] transition duration-200"
                  : "border-b-2 border-transparent hover:text-[#9F62F2] hover:border-[#9F62F2] transition duration-200"
              }
            >
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9F62F2] border-b-2 border-[#9F62F2] transition duration-200"
                  : "border-b-2 border-transparent hover:text-[#9F62F2] hover:border-[#9F62F2] transition duration-200"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to={"https://github.com/saimakhan1"}>
          <div className="flex items-center gap-2 bg-[#9F62F2] text-white p-2 rounded-xl">
            <FaGithub />
            Contribute
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
