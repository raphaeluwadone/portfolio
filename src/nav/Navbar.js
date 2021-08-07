import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {

    const topScroll = () => {
        scroll.scrollToTop()
    }

    return (
        <div className="nav_body">
            <div className="nav_brand">
                <Link
                    onClick={topScroll}
                >
                    Rafaelo
                </Link>
            </div>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                <Link
                        activeClass="active"
                        to="tools"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    Tools
                    </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Projects
                    </Link>
                    </li>
            </ul>
            <div className="btn">
                <a href="mailto:raphaeluwadone@gmail.com">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
