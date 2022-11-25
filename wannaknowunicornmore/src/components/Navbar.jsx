import React from "react";
import navunicorn from '../images/unicorn-nav.png';
import "./Navbar.css";

function Navbar()  {
    return (
        <div className ="shadow-md w-full top-0 left-0 bg-emerald-200 z-50">
            <div className="nav-container z-50">
                <ul className="flex flex-row justify-around mx-5 items-center z-50">
                    <a className="transition ease-in-out delay-150 hover:scale-150 duration-300"  href=""><li>HOME</li></a>
                    <a className="transition ease-in-out delay-150 hover:scale-150 duration-300" href=""><li>HISTORY</li></a>
                    <a ><li><img class="unicorn-circle" src={navunicorn} /></li></a>
                    <a className="transition ease-in-out delay-150 hover:scale-150 duration-300" href=""><li>ABILITY</li></a>
                    <a href="#MEMBER" className="transition ease-in-out delay-150 hover:scale-150 duration-300" ><li>MEMBER</li></a>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;