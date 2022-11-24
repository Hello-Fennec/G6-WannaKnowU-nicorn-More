import React from "react";
import "./page.css";
import unicorn6_1 from '../images/unicorn1page6.png';
import unicorn6_2 from '../images/unicorn2page6.png';

function Page6() {
  return (
    <div className="Page6">
      <div className="page6-bg">
        <div className="pic6">
          <img className="unicorn1_p6" src={unicorn6_1}></img>
        </div>
        <div className="pic6_2">
          <img className="unicorn2_p6" src={unicorn6_2}></img>
        </div>
      </div>
    </div>
  );
}

export default Page6;