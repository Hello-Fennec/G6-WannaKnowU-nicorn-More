import React from "react";
import "./page.css"
import unicorn1 from '../images/unicornpage1.png';

function Page1() {
  return (
    <div className="Page1">
      <div className="page1-bg">
        <div className="pic1">
          <img src={unicorn1} class="unicorn_p1"></img>
        </div>
      </div>
    </div>
  );
}

export default Page1;
