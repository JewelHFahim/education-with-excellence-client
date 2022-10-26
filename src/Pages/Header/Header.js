import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-slate-900">
      <div className="navbar  text-base-100 w-10/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown text-slate-900">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cources">Cources</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl text-center text-[#FF5349]">
            {" "}
            Education <br />{" "}
            <span className="text-white font-light text-lg">
              with excellence
            </span>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cources">Cources</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ?

            <div>
            { 
              user?.photoURL ? 
              <Link to="/profile" className="tooltip tooltip-left" data-tip={user?.displayName}><img className="profile-pic border border-red-700 p-0.5 rounded-full" src={user?.photoURL} alt="" /></Link>
              :
              <Link to="/profile"><p>{user?.email}</p></Link> 
            }
            
            </div>
            : 
            <Link to="/profile"><p>{user?.email}</p></Link>
          }

          {user?.email ? (
            <button onClick={handleLogOut} className=" ml-2 btn btn-xs">
              Log Out
            </button>
          ) : (
            <button onClick={handleLogOut} className=" ml-2 mr-2 btn btn-xs">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
        <input type="checkbox" className="toggle" checked />
      </div>
    </div>
  );
};

export default Header;
