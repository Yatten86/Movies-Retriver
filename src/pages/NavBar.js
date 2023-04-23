import React from 'react';
import { FiSearch } from 'react-icons/fi';

const NavBar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <a href="url" className="font-semibold text-xl tracking-tight" >MovieDb App</a>
                </div>
                <div className="flex items-center flex-shrink-0 mr-6">
                    <a href="url" className="font-semibold text-xl tracking-tight">Trending</a>
                </div>

                    <div className="flex items-center">
                        <div className="relative">
                            <FiSearch className="text-gray-400 absolute top-0 bottom-0 my-auto mx-3" />
                            <input type="text" className="bg-gray-800 rounded-full w-full py-2 px-8 text-sm focus:outline-none focus:shadow-outline" placeholder="Search movies..." />
                        </div>
                    </div>
                </div>
        </nav>
    );
};

export default NavBar