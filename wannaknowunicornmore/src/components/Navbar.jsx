import React from "react";
import navunicorn from '../images/unicorn-nav.png';
import "./Navbar.css";

function Navbar()  {
    return (
        <div className ="shadow-md w-full fixed top-0 left-0 bg-emerald-200">
            <div className="">
                <ul className="flex flex-row justify-around mx-5 items-center">
                    <button className="transition ease-in-out delay-150 hover:scale-110 duration-300"  href=""><li>HOME</li></button>
                    <button className="transition ease-in-out delay-150 hover:scale-110 duration-300" href=""><li>HISTORY</li></button>
                    <button ><li><img class="unicorn-circle" src={navunicorn} /></li></button>
                    <button className="transition ease-in-out delay-150 hover:scale-110 duration-300" href=""><li>ABILITY</li></button>
                    <button className="transition ease-in-out delay-150 hover:scale-110 duration-300" href=""><li>MEMBER</li></button>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;