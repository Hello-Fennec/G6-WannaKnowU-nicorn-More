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
        <p className="text3">เมื่อโตเต็มที่จะมีสีขาวบริสุทธิ์ สง่างาม <br/>มีเขาเดียวที่กลางหน้าผาก และเขามีลักษณะเป็นเกลียวไปทางซ้าย</p>

      </div>
    </div>
  );
}

export default Page3;
