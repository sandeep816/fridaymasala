import { NavLink } from "react-router-dom";

const NavItem = ({ path, label }) => {
    return <NavLink className={({ isActive }) => isActive ? "mr-5 text-blue-300" : "mr-5 text-white hover:text-blue-300"} to={path}>
        {label}
    </NavLink>
};

export default NavItem;