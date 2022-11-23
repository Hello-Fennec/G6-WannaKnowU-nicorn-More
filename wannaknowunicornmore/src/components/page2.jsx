import React from "react";
import "./page.css";
import unicorn2 from '../images/unicornpage2.png';

function Page2() {
  return (
    <div className="Page2">
      <div className="page2-bg">
        <div className="pic2">
          <img src={unicorn2} class="unicorn_p2"></img>
        </div>
      </div>
    </div>
  );
}

export default Page2;
