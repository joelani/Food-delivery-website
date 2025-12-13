import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/" },
    { name: "Mobile app", path: "/" },
    { name: "Contact us", path: "/" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-BackgroundLight backdrop-blur-lg z-40 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 transition-all ">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={assets.logo} className="w-28 max-md:w-24" alt="Logo" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="font-semibold text-PrimaryDark/80 group flex flex-col gap-0.5"
          >
            {link.name}
            <span className="h-0.5 w-0 bg-PrimaryDark group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-6">
        <img src={assets.search_icon} className="w-4 h-4" alt="" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} className="w-4 h-4" alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "w-2 h-2 rounded-full bg-Primary absolute -top-1.5 -right-1.5"
            }
          ></div>
        </div>
        {!token ? (
          <button
            className="px-8 py-2.5 rounded-full bg-BackgroundLight hover:bg-white text-PrimaryDark font-semibold border transition"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        ) : (
          <div className="relative group cursor-pointer">
            <img src={assets.profile_icon} alt="" />
            <ul className=" absolute top-10 right-0 w-40 bg-green-200/70 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 py-1 border border-Primary outline-2 outline-Primary px-1">
              <li
                onClick={() => navigate("/myorders")}
                className="px-2 py-2 hover:bg-GrayLight/50 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <img className="w-6" src={assets.bag_icon} alt="" />
                <p className="text-PrimaryDark hover:text-Primary hover:font-semibold">
                  Orders
                </p>
              </li>
              <hr className=" h-0.5 bg-Primary/75 border-none mx-5" />
              <li
                onClick={handleLogout}
                className=" px-2 py-2 hover:bg-GrayLight/50 flex items-center justify-center gap-2.5 cursor-pointer "
              >
                <img className="w-6" src={assets.logout_icon} alt="" />
                <p className="text-PrimaryDark hover:text-Primary hover:font-semibold 5">
                  Logout
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-center gap-3">
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} className="w-4 h-4" alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "w-2 h-2 rounded-full bg-Primary absolute -top-1.5 -right-1.5"
            }
          ></div>
        </div>
        <svg
          onClick={() => setIsMenuOpen(true)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 md:hidden text-lg transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700"
          >
            {link.name}
          </a>
        ))}

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-black text-white px-8 py-2.5 rounded-full"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-8 py-2.5 rounded-full"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
