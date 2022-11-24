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
          <img className="unicorn1_p8" src={unicorn8_1}></img>
          <img className="person_p8" src={person8}></img>
        </div>
        <div className="pic8_2">
          <img className="unicorn2_p8" src={unicorn8_2}></img>
        </div>
      </div>
    </div>
  );
}

export default Page8;
