import React from "react";
import Ig from "../Assets/igimage.jpeg";
import mail from "../Assets/gmail.png";

function Cta() {
  return (
    <>
      <div className="cta-container">
        <h2>Get In Touch</h2>
        <p>
          To know more about me, <a href="">Download my Resume</a>. You can also drop a line to
          say goodday, or see if we can work together to build something awesome
          by reaching out to me on any of these platforms:
        </p>
        <div className="tabs">
          <a href="https://github.com/raphaeluwadone" target="_blank" className="tab">
            <i class="devicon-github-original colored"></i>
            <p>GITHUB</p>
          </a>
          <div className="tab">
            <i class="devicon-twitter-original colored"></i>
            <p>TWITTER</p>
          </div>
          <a href="https://www.linkedin.com/feed/" target="_blank" className="tab">
            <i class="devicon-linkedin-plain colored"></i>
            <p>LINKEDIN</p>
          </a>
          <a href="https://www.instagram.com/_donatellofficial_/" target="_blank" className="tab">
            <img src={Ig} alt="" />
            <p>INSTAGRAM</p>
          </a>
          <a href="mailto:raphaeluwadone@gmail.com" className="tab">
            <img src={mail} alt="" />
            <p>GMAIL</p>
          </a>
        </div>
      </div>
      <div className="footer">
        <p>&#169; Raphael Uwadone | 2021</p>
      </div>
    </>
  );
}

export default Cta;
