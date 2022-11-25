import React from "react";
import "./page.css"
import unicorn1 from '../images/unicornpage1.png';

function Page1() {
  return (
    <div className="Page1" id="HISTORY">
      <div className="page1-bg">
        <div className="pic1">
        <a href="#PAGE2"><img src={unicorn1} className="unicorn_p1 top"z/></a>
        </div>
        <p className="text1">ลูกยูนิคอร์น แรกเกิดจะมีขนสีทอง</p>
      </div>
    </div>
  );
}

export default Page1;
