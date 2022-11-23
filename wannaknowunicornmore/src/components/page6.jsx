import React from "react";
import "./page.css";
import unicorn6_1 from '../images/unicorn1page6.png';
import unicorn6_2 from '../images/unicorn2page6.png';

function Page6() {
  return (
    <div className="Page6">
      <div className="page6-bg">
        <div className="pic6">
          <img src={unicorn6_1} class="unicorn1_p6"></img>
          <img src={unicorn6_2} class="unicorn2_p6"></img>
        </div>
      </div>
    </div>
  );
}

export default Page6;