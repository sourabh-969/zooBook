// Header_NavBar
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">
          ZooBook
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/home" className="text-white hover:text-blue-200">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse" className="text-white hover:text-blue-200">
              Browse Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className="text-white hover:text-blue-200">
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
