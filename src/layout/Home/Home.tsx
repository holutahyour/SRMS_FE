import { MdArrowDropDown, MdCancel, MdNotifications } from 'react-icons/md';
import { BiCalendar, BiCopyright } from 'react-icons/bi';
import { RiDashboardLine } from 'react-icons/ri';
import { FaUserGraduate } from 'react-icons/fa';
import './style.css'
import Drawer from '../../components/Drawer/Drawer';
import Navbar, { NavbarCenterMenu, NavbarMenu } from '../Navbar/Navbar';
import { HiLogout, HiPlus, HiUserGroup } from 'react-icons/hi';
import { BsGearWide } from 'react-icons/bs';
import Dropdown from '../../components/Dropdown/Dropdown';
import './style.css';
import LogoImage from '../../assets/covenant-university-logo-desktop.png'
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/store';
import React from 'react';



function Home({ children }: { children: JSX.Element[] | JSX.Element }) {
    const { authStore } = useStore()
    const { signOut } = authStore
    return (
        <>
            <Drawer>
                <div className='h-full w-full grid grid-cols-12'>
                    <Navbar className='col-span-12'>
                        <Logo />
                        <MdNotifications className='text-3xl lg:hidden' />
                        <NavbarCenterMenu>
                            <button className='font-semibold btn btn-md btn-ghost'><Link to="/dashboard">Dashboard</Link></button>
                            <button className='font-semibold btn btn-md'><Link to="/upload">  Upload</Link></button>
                        </NavbarCenterMenu>
                        <NavbarMenu>
                            {/* <MdNotifications size={25} /> */}
                            <Dropdown
                                dropDownStyle="dropdown-end"
                                icon={<BsGearWide size={25} />}
                                isButton={false}
                            >
                            </Dropdown>
                            <Dropdown
                                dropDownStyle="dropdown-end"
                                icon={<UserInfo />}
                                isButton={false}
                            >
                                <li onClick={() => signOut()}><a><HiLogout /> Sign out</a></li>
                            </Dropdown>
                        </NavbarMenu>
                    </Navbar>
                    <SideNav className='col-span-2 sticky self-start'>
                        <div className='bg-gray-600 p-3 rounded-xl space-y-2'>
                            <a
                                href="#"
                                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                            >
                                <RiDashboardLine />

                                <span className="text-sm font-medium"> Dashboard </span>
                            </a>

                            <Link
                                to='/student'
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                            >
                                <FaUserGraduate />

                                <span className="text-sm font-medium"> Student </span>
                            </Link>

                            <details className="group [&_summary::-webkit-details-marker]:hidden text-white">
                                <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <div className="flex items-center gap-2">
                                        <HiUserGroup />
                                        <span className="text-sm font-medium"> Teams </span>
                                    </div>

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <MdCancel />
                                        <span className="text-sm font-medium"> Banned Users </span>
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <BiCalendar />
                                        <span className="text-sm font-medium"> Calendar </span>
                                    </a>
                                </nav>
                            </details>

                            
                        </div>



                    </SideNav>
                    <div className='m-6 mx-12 col-span-10 overflow-y-auto'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </Drawer>
        </>
    )
}

export default Home;

interface ILogoProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children?: JSX.Element[] | JSX.Element
}

export const Logo = (props: ILogoProps) => {

    return (
        <div {...props} className={`flex items-center w-fit ${props.className}`}>
            <img className='h-7' src={LogoImage} />
            <h1 className='text-xl font-bold capitalize w-fit lg:px-2 lg:mx-2'>SRMS</h1>
        </div>
    )
}

export const NavAddIcon = () => {
    return (
        <div className='flex items-center justify-center'>
            <HiPlus size={20} />
            <MdArrowDropDown />
        </div>
    )
}

export const UserInfo = () => {
    const { authStore } = useStore()
    const { user } = authStore

    return (
        <button
            type="button"
            className="flex items-center transition rounded-lg group shrink-0"
        >
            <span className="sr-only">Menu</span>
            <img
                alt="Man"
                src={user?.imageUrl}
                className="object-cover w-10 h-10 rounded-full"
            />

            <p className="hidden text-xs text-left ms-2 sm:block">
                <strong className="block font-medium">{user?.lastName} {user?.firstName}</strong>

                <span className="text-gray-500"> {user?.username} </span>
            </p>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden w-5 h-5 text-gray-500 transition ms-4 group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    )
}

interface ISideNav extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element[] | JSX.Element
}

export const SideNav = (props: ISideNav) => {
    const { children, className } = props
    // const { authStore } = useStore()
    // const { user } = authStore

    return (
        <div {...props} className={`flex h-screen flex-col justify-between border-e bg-white ${className}`}>
            <div className="px-4 py-6">

                <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
                    {children}
                </nav>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="sticky bg-gray-700 text-white inset-x-0 bottom-0 border-t border-gray-100 grid place-items-center p-1 col-span-12">
            <p className="hidden text-xs text-left ms-2 sm:grid sm:place-items-center">
                <strong className="block font-medium">Developed by Holutahyour</strong>
                <span className="text-gray-300 flex items-end gap-1"><BiCopyright />copyright 2023 - {new Date().getFullYear()}</span>
            </p>
        </div>
    )
}