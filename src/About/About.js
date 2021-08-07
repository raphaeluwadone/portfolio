import React, { useRef, useEffect } from 'react'
import ProfilePic from "../Assets/portfolio-img.png"
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



function About() {

    let imgRef = useRef(null)
    let containerRef = useRef(null)
    let imgReveal = CSSRulePlugin.getRule('.imgBx:after')
    let aboutContainer = useRef(null)

    useEffect(() => {
        // gsap.to(imgReveal, {duration: 1.4, width: '0%', ease: Power2.easeInOut})
        // gsap.from(imgRef, {duration: 1.2, scale: 1.4, ease: Power2.easeInOut, delay: -1.6})

        gsap.to(imgReveal, {duration: 1.4, width: '0%', ease: Power2.easeInOut, scrollTrigger: {
            trigger: aboutContainer.current,
            scrub: 1,
            start: "top center",
            end: "bottom bottom",
            markers: true,
            pin: true,
            toggleActions: "restart complete reverse reset"
        }})

        gsap.from(imgRef, {duration: 1.3, scale: 1.2, ease: Power2.easeInOut, delay: -1.3, scrollTrigger: {
            trigger: aboutContainer.current,
            scrub: 1,
            start: "top center",
            end: "bottom bottom",
            markers: true,
            pin: true,
        }})
    }, [])
    return (
        <div className="about" ref={aboutContainer} id="about">
            <div className="main_about container">
                <div className="text">
                    <h4>I am Fascinated about the web</h4>
                    <p>...and building efficient problem solving applications using modern technologies. With my long lasting 
                        fascination about the web and its working principles,I am constantly driven to learn more and know more,
                        accepting that as a developer i'll forever be a student of the craft.
                    </p>

                    <p>I have a B.Eng in Electrical and Electronics Engineering, and a certificate of front-end web development 
                        immersive from Tech studio Academy, Nigeria. I have a great desire to share my growing Knowledge in whatever 
                        capacity i can, either virtualy or in my everyday interaction. I’m an ardent lover of
                        Sports and good music and I have found a purpose with programming, I’m enjoying my bitter sweet relationship with it.
                    </p>
                </div>
                <div className="imgBx" ref={el => containerRef = el}>
                    <img src={ProfilePic} alt="" ref={el => imgRef = el}/>
                </div>
            </div>
        </div>
    )
}

export default About
