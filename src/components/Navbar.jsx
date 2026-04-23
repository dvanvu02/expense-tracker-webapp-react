import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
            {/* <nav className="flex items-center justify-between px-10 py-5 bg-white w-full relative z-20 shadow-sm"> */}
            <Link to="/home">
                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="logo" className="h-10 w-10" />
                    <span className="text-lg font-medium text-black truncate">Expense Tracker</span>
                </div>
            </Link>
            <div className="hidden md:flex gap-8 text-gray-600">
                <a href="/home">Home</a>
                <a href="/home">About us</a>
                <a href="/home">Contact us</a>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={() => navigate('/login')} className="text-gray-700 font-medium hover:text-purple-700 cursor-pointer">Login</button>
                <button onClick={() => navigate('/signup')} className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 cursor-pointer">Get Started</button>
            </div>
        </nav >
    )
}

export default Navbar;