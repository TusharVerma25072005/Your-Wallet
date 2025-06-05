'use client';

import Link from 'next/link';
import { useState } from 'react';

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                className="md:hidden relative z-50 p-2 rounded-md hover:bg-blue-600 transition-colors"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-6 flex flex-col justify-around">
                    <span
                        className={`h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                            isOpen ? 'rotate-45 translate-y-2.5' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                            isOpen ? '-rotate-45 -translate-y-2.5' : ''
                        }`}
                    />
                </div>
            </button>

            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-40 ${
                    isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeMenu}
            />

            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">YourWallet</h2>
                    <button
                        onClick={closeMenu}
                        className="p-2 hover:bg-blue-600 rounded-md transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="p-4">
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link 
                                href="/" 
                                className="flex items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200"
                                onClick={closeMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span className="font-medium">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/transactions" 
                                className="flex items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200"
                                onClick={closeMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="font-medium">Transactions</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/transfer" 
                                className="flex items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200"
                                onClick={closeMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <span className="font-medium">Transfer</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/account" 
                                className="flex items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200"
                                onClick={closeMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <span className="font-medium">Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/add" 
                                className="flex items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200"
                                onClick={closeMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="font-medium">Add Money</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="px-4 mt-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href="/add"
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-lg text-center transition-colors"
                            onClick={closeMenu}
                        >
                            <div className="text-sm font-medium">Add Money</div>
                        </Link>
                        <Link
                            href="/transfer"
                            className="bg-green-50 hover:bg-green-100 text-green-700 p-3 rounded-lg text-center transition-colors"
                            onClick={closeMenu}
                        >
                            <div className="text-sm font-medium">Transfer</div>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">© 2024 YourWallet</p>
                </div>
            </div>
        </>
    );
};