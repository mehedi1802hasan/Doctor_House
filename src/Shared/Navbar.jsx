import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="  ">
            <div className="navbar fixed bg-[#07332F]  z-10 bg-opacity-60 text-white  xl:flex-row gap-2 items-center justify-center md:justify-between  px-3  md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#07332F] rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/appointment">Appointment</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <span className='text-yellow-600'>Doc</span> House
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    {/* Add content for navbar center if needed */}
                </div>
                <div className="navbar-end">
                    <ul className="hidden md:flex gap-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/appointment">Appointment</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
