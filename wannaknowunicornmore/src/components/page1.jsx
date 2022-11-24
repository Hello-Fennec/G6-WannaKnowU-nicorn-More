import React from "react";
import "./page.css"
import unicorn1 from '../images/unicornpage1.png';
import unicorn1_2 from '../images/unicornpage2.png';

function Page1() {
  return (
    <div className="Page1" id="PAGE1">
      <div className="page1-bg">
        <div className="pic1">
        <a href="#PAGE2"><img src={unicorn1} className="unicorn_p1 top"></img></a>
        </div>
        <div className="pic1_2">
          <img className="unicorn_p1_2" src={unicorn1_2} ></img>
        </div>
        <p className="text1">ลูกยูนิคอร์น แรกเกิดจะมีขนสีทอง</p>
      </div>
    </div>
  );
}

export default Page1;
