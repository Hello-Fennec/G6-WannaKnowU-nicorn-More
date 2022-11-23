import React from "react";
import "./page.css";
import unicorn8_1 from '../images/unicorn1page8.png';
import unicorn8_2 from '../images/unicorn2page8.png';
import person8 from '../images/personpage8.png';

function Page8() {
  return (
    <div className="Page8">
      <div className="page8-bg">
        <div className="pic8">
          <img src={unicorn8_1} class="unicorn1_p8"></img>
          <img src={person8} class="person_p8"></img>
        </div>
        <div className="pic8_2">
          <img src={unicorn8_2} class="unicorn2_p8"></img>
        </div>
      </div>
    </div>
  );
}

export default Page8;
