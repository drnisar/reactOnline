import { NavLink } from "react-router-dom";

const NavBar = () => {

    const classNameDynamic = ({ isActive }: { isActive: boolean }) => `text-blue-500 hover:text-blue-700 px-2 ${isActive ? 'font-bold' : ''}`;
    return (
        <nav className="flex bg-gray-100 p-2">
       <NavLink to="/" className={classNameDynamic}>
        Home
       </NavLink>
       <NavLink to="/about" className={classNameDynamic}>
        About
       </NavLink>
       <NavLink to="/users" className={classNameDynamic}>
        Users
       </NavLink>
        </nav>
    )
}
export default NavBar;