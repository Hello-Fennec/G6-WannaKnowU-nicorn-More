import React from "react";
import "./page.css";
import membertext from "../images/membertext.png";
import member1 from "../images/member1.png";
import member2 from "../images/member2.png";
import member3 from "../images/member3.png";
import member4 from "../images/member4.png";
import member5 from "../images/member5.png";
import member6 from "../images/member6.png";

function Members() {
  return (
    <div className="UnicornMembers">
      <div className="members-bg">
        <div className="memberpic">
          <img className="membertext m-auto pt-20"  id="MEMBER" src={membertext} alt="" />
        </div>
        <div className="Members">
          <div className="flexcontainer">
            <button href=""><img className="member1" src={member1}></img></button>
            <img className="member2" src={member2}></img>
            <img className="member3" src={member3}></img>
            <img className="member4" src={member4}></img>
            <img className="member5" src={member5}></img>
            <img className="member6" src={member6}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
