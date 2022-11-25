import React from "react";
import "./page.css";
import unicorn2 from '../images/unicornpage2.png';

function Page2() {
  return (
    <div className="Page2" id="PAGE2">
      <div className="page2-bg">
        <div className="pic2" id="#PAGE2">
          <img className="unicorn_p2" src={unicorn2}></img>
        </div>
        <p className="text2">และเปลี่ยนเป็นสีเงินก่อนจะโตเต็มวัย <br/>ขา เลือด และขน ของยูนิคอร์นนำไปใช้ทางเวทย์มนต์ได้อย่างดี</p>
      </div>
    </div>
  );
}

export default Page2;
