import { NavLink } from "react-router-dom";

const NavItem = ({ path, label }) => {
    return <NavLink className={({ isActive }) => isActive ? "mr-5 text-red-900" : "mr-5 hover:text-gray-900"} to={path}>
        {label}
    </NavLink>
};

export default NavItem;