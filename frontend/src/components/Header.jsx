import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slices/authSlices";
import ThemeToggle from "./ThemeToggle";

const Header = () => {

  const { name, role, profilePic } = useSelector((store) => store.auth);
  console.log("Profile pic url is ", profilePic, name, role);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  }

  return (
    <div className="navbar bg-base-100 px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost text-xl">Code Evaluator</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/problems">Problems</Link>
          </li>
          <li>
            <Link to="/contests">Contests</Link>
          </li>
          <li>
            <Link to="/submissions">Your Submissions</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={profilePic} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li className="bg-red-700 text-white rounded-lg"><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
