import React from "react";
import Ig from "../Assets/igimage.jpeg";
import mail from "../Assets/gmail.png";

function Cta() {
  return (
    <>
      <div className="cta-container">
        <h2>Get In Touch</h2>
        <p>
          To know more about me, Download my Resume. You can also drop a line to
          say goodday, or see if we can work together to build something awesome
          by reaching out to me on any of these platforms:
        </p>
        <div className="tabs">
          <div className="tab">
            <i class="devicon-github-original colored"></i>
            <p>GITHUB</p>
          </div>
          <div className="tab">
            <i class="devicon-twitter-original colored"></i>
            <p>TWITTER</p>
          </div>
          <div className="tab">
            <i class="devicon-linkedin-plain colored"></i>
            <p>LINKEDIN</p>
          </div>
          <div className="tab">
            <img src={Ig} alt="" />
            <p>INSTAGRAM</p>
          </div>
          <div className="tab">
            <img src={mail} alt="" />
            <p>GMAIL</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&#169; Raphael Uwadone | 2021</p>
      </div>
    </>
  );
}

export default Cta;
