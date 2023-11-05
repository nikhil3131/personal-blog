import { NavLink } from "react-router-dom";

export default function DesktopMenu() {
    return (
        <div className="flex items-center space-x-[2.76rem]">
            <NavLink to="/" className={({isActive})=> `${isActive ? "bg-[#0D2436] p-1 text-white rounded-md px-2" : ""}`}>Home</NavLink>
            <NavLink to="/articles" className={({isActive})=> `${isActive ? "bg-[#0D2436] p-1 text-white rounded-md px-2" : ""}`}>Articles</NavLink>
            <NavLink to="/pages" className={({isActive})=> `${isActive ? "bg-[#0D2436] p-1 text-white rounded-md px-2" : ""}`}>Pages</NavLink>
            <NavLink to="/faq" className={({isActive})=> `${isActive ? "bg-[#0D2436] p-1 text-white rounded-md px-2" : ""}`}>Faq</NavLink>
        </div>
    );
}
