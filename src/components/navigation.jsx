import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.png';

export const Navigation = ({ page }) => {
    const [navigation, setNavigation] = useState(false);

    return (
        <>
            <header className="flex h-14 justify-between items-center bg-purple-600 shadow">
                <NavLink to={"/"}>
                    <div className="ml-5 lg:ml-20 font-sans text-xl flex font-medium">
                        <span className="mb-0.5"><img src={logo} alt="MIndora" /> </span>
                        <div className="px-2 text-blue-600 font-bold bg-purple-600 ml-1 mt-4 ">MINDORA</div>
                    </div>
                </NavLink>
                <ul className="list-none hidden lg:flex gap-8">
                    <NavLink to={"/"}><li className={(page === "home") ? (" text-brandColorTwo ") : (" text-white")}>Home</li></NavLink>
                    <NavLink to={"/about"}><li className={(page === "about") ? ("text-brandColorTwo") : ("text-white")}>About</li></NavLink>
                    <NavLink to={"/services"}> <li className={(page === "services") ? ("text-brandColorTwo") : ("text-white")}>Services</li></NavLink>
                    <NavLink to={'/therapists-list'}> <li className={(page === "therapists") ? ("text-brandColorTwo") : ("text-white")}>Therapists</li></NavLink>
                    <NavLink to={'/pricing'}><li className={(page === "pricing") ? ("text-brandColorTwo") : ("text-white")}>Pricing</li></NavLink>
                    <NavLink to={'/contact-us'}> <li className={(page === "contact") ? ("text-brandColorTwo") : ("text-white")}>Contact Us</li></NavLink>
                </ul>
                <div className={navigation ? ("hidden cursor-pointer mr-2 lg:hidden") : ("flex cursor-pointer mr-2 lg:hidden")} onClick={() => {
                    setNavigation(true)
                }}>
                    <FaBars />
                </div>
                <div className={navigation ? ("flex cursor-pointer mr-2 lg:hidden") : ("hidden cursor-pointer mr-2 lg:hidden")} onClick={() => {
                    setNavigation(false)
                }}>
                    <RxCross2 />
                </div>
            </header>
            <div id="NavPop" className={navigation ? (" flex-col flex items-center right-0 fixed z-50 h-96 gap-4 p-5 w-64 text-xl opacity-95 bg-purple-600 text-white ml-2 ") : ("fixed hidden w-full text-white justify-around bg-blue-500")}>
                <NavLink to={"/"}><div className={(page === "home") ? ("text-blue-500") : ("")}>Home</div></NavLink>
                <NavLink to={"/about"}><div className={(page === "about") ? ("text-blue-500") : ("")}>About</div></NavLink>
                <NavLink to={"/services"}> <div className={(page === "services") ? ("text-blue-500") : ("")}>Services</div></NavLink>
                <NavLink to={'/therapists-list'}> <div className={(page === "therapists") ? ("text-blue-500") : ("")}>Therapists</div></NavLink>
                <NavLink to={'/pricing'}><div className={(page === "pricing") ? ("text-blue-500") : ("")}>Pricing</div></NavLink>
                <NavLink to={'/contact-us'}> <div className={(page === "contact") ? ("text-blue-500") : ("")}>Contact Us</div></NavLink>
            </div>
        </>
    )
}