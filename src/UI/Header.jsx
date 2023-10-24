import { useState } from 'react';
import logo from '../assets/logofondblanc.png';
import { Link } from 'react-router-dom';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
            <div className=" flex flex-wrap items-center justify-between py-3 md:py-2 containers">
                <a
                    href="https://flowbite.com/"
                    className="contents items-center"
                >
                    <img
                        src={logo}
                        alt="Logo de WhiteFish"
                        className="md:w-[13%] w-[25%] self-center"
                    />
                    {/* <span className="self-center text-2xl font-bold whitespace-nowrap text-textcolor ">
                        WHITE
                    </span>
                    <span className='text-primarycolor self-center text-2xl font-bold whitespace-nowrap'>FISH</span> */}
                </a>

                <div className="flex md:order-2 md:hidden">
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between gap-4 w-full md:flex md:w-auto md:order-1 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white mt-2 md:mt-0 pb-4 md:pb-0 ${
                        !isOpen ? 'hidden' : 'transition-all'
                    }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col px-4 py-2 md:p-0  font-medium  md:flex-row md:space-x-8 md:mt-0  ">
                        <li>
                            <Link
                            to="/"
                                className="block py-2 pl-3 pr-4 text-primarycolor rounded md:bg-transparent  md:p-0 "
                                aria-current="page"
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-primarycolor md:p-0  "
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/NosProduits"
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-primarycolor md:p-0  "
                            >
                                Nos produits
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Contact"
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-primarycolor md:p-0  "
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="text-white bg-primarycolor hover:bg-primarydarkercolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ml-6 md:ml-0"
                    >
                        Commander
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
