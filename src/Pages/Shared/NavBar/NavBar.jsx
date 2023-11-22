import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const isAdmin = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Our Food</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        <li>
            <NavLink to="/dashboard/cart">
                <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </NavLink>
        </li>
    </>
    return (
        <>
            <div className="navbar bg-black bg-opacity-80 fixed z-10 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenuFold className="text-2xl"></AiOutlineMenuFold>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl uppercase">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full border-red-200 border-2">
                                <img alt="User Image" src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-500 rounded w-52">
                            <p>{user?.email}</p>
                            <li>
                                <a className="justify-between text-xl hover:text-slate-100">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                {
                                    user ? <p className="text-xl hover:text-slate-100">{user?.displayName}</p> : <progress className="progress w-56"></progress>
                                }
                            </li>
                            <li>
                                {
                                    user ? <p onClick={handleLogOut} className="text-xl hover:text-slate-200">Log Out</p> : <button className="text-xl hover:text-slate-200"><NavLink to="/login">Login</NavLink></button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="navbar-end">
                    {
                        user ? <>
                            <span className="text-black font-bold mx-2 bg-slate-200 p-2">{user?.displayName}</span> <button onClick={handleLogOut} className="btn btn-error">Log Out</button></> : <button className="btn btn-error"><NavLink to="/login">Login</NavLink></button>
                    }
                </div> */}
            </div>
        </>
    );
};

export default NavBar;