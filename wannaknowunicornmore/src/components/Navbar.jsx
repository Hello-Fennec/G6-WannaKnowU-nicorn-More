import React from "react";
import navunicorn from '../images/unicorn-nav.png';
import "./Navbar.css";

function Navbar()  {
    return (
        <div class ="shadow-md w-full fixed top-0 left-0 bg-emerald-200">
            <div class ="">
                <ul class="flex flex-row justify-between mx-5 items-center">
                    <a href=""><li>HOME</li></a>
                    <a href=""><li>HISTORY</li></a>
                    <a href=""><li><img class="unicorn-circle" src={navunicorn} /></li></a>
                    <a href=""><li>ABILITY</li></a>
                    <a href=""><li>MEMBER</li></a>
                </ul>
            </div>
        </div>
       
    )
}
export default Navbar;