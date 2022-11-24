import React from "react";
import "./page.css";
import unicorn3 from '../images/unicornpage3.png';

function Page3() {
  return (
    <div className="Page3">
      <div className="page3-bg">
        <div className="pic3">
          <img className="unicorn_p3" src={unicorn3}></img>
        </div>
      </div>
    </div>
  );
}

export default Page3;
