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
          <div className="flex-container overflow-y-hidden">
            <div className="box1 transition ease-in-out delay-150 hover:scale-125 duration-300"><a href="https://www.instagram.com/parkseogame/" target="_blank"><img className="member1" src={member1}></img></a></div>
            <div className="box2 transition ease-in-out delay-150 hover:scale-125 duration-300"><a href="https://www.instagram.com/n_ttr_n/" target="_blank"><img className="member2" src={member2}></img></a></div>
            <div className="box3 transition ease-in-out delay-150 hover:scale-125 duration-300"><a href="https://www.instagram.com/inrita_/" target="_blank"><img className="member3" src={member3}></img></a></div>
            <div className="box4 transition ease-in-out delay-150 hover:scale-125 duration-300"><a href="https://instagram.com/anpannamm?igshid=Zjc2ZTc4Nzk=" target="_blank"><img className="member4" src={member4}></img></a></div>
            <div className="box5 transition ease-in-out delay-150 hover:scale-125 duration-300"><a href="https://instagram.com/pprxewaa?igshid=MDM4ZDc5MmU=" target="_blank"><img className="member5" src={member5}></img></a></div>
            <div className="box6 transition ease-in-out delay-150 hover:scale-125 duration-300"><a href="https://www.instagram.com/n_tth_d01/" target="_blank"><img className="member6" src={member6}></img></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
