import { NavLink } from "react-router-dom";
import { useUserStore } from "../state-management/userStore";

const NavBar = () => {

    const classNameDynamic = ({ isActive }: { isActive: boolean }) => `text-blue-500 hover:text-blue-700 px-2 ${isActive ? 'font-bold' : ''}`;
    const {name} = useUserStore();
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
        <span>{name}</span>
        </nav>

   
    )
}
export default NavBar;