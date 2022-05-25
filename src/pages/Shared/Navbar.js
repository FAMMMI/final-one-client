import React from 'react';
import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItem = <>
        <li><CustomLink to="/home" >Home</CustomLink></li>
        <li><CustomLink to="/products"> Products</CustomLink></li>
        <li><CustomLink to="/myPortfolio"> My Protfolio</CustomLink></li>
        <li><CustomLink to="/reviews"> Reviews</CustomLink></li>
        <li><CustomLink to="/blogs" >Blogs</CustomLink></li>

        {
            user && <li><CustomLink to="/dashboard" >Dashboard</CustomLink></li>
        }
        <li>{user ? <button className='btn btn-ghost' onClick={logout}>Sign Out</button> : <CustomLink to="/login" >Login</CustomLink>}</li>
    </>
    return (
        <div className="navbar bg-amber-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}

                    </ul>
                </div>
                <Link to="/home" className="btn btn-ghost normal-case text-3xl text-primary ">BNB MOTORPARTS</Link>
            </div>
            <div >

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;