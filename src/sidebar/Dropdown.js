import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Dropdown({ open, setOpen }) {
  const toggle = () => {
    setOpen(false);
  };

  return (
    <div
      className={`${open ? "dropped_body" : "dropdown_body"}`}
      onClick={toggle}
    >
      <ul onClick={toggle} className="drop">
        <li onClick={toggle}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={toggle}
          >
            About Me
          </Link>
        </li>
        <li onClick={toggle}>
          <Link
            activeClass="active"
            to="tools"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={toggle}
          >
            Tools
          </Link>
        </li>
        <li onClick={toggle}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggle}
          >
            Projects
          </Link>
        </li>
        <li className="btn" onClick={toggle}>
          <a href="mailto:raphaeluwadone@gmail.com" onClick={toggle}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
