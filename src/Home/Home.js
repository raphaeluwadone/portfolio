import React, { useRef, useEffect, useState } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import linkOne from '../Assets/010101-1.png'
import linkTwo from '../Assets/header{}.png'
import linkThree from '../Assets/stylesheet_ raph.css-1.png'
import linkFour from "../Assets/stylesheet_ raph.css.png"
import linkFive from "../Assets/Group 22.png"
import Navbar from '../nav/Navbar.js'

    gsap.registerPlugin(ScrollTrigger)

function Home() {
    const blockOne = useRef(null)
    const blockTwo = useRef(null)
    const blockThree = useRef(null)
    const greetingsRef = useRef(null)
    const headerRef = useRef(null)
    const textRef = useRef(null)
    const mainContentRef = useRef(null)
    const containerRef = useRef(null)
    const linkduo = useRef(null)



    const [time, setTime] = useState(new Date().getHours())
    const [salute, setSalute] = useState()

    
    useEffect(() => {
        const animateIt = (e) => {
            const {offsetX: x, offsetY: y} = e,
            {offsetWidth: width, offsetHeight: height} = e,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
    
            linkduo.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
            if (e.type === 'mouseleave') linkduo.current.style.transform = ''
        }
    
        // linkduo.current.addEventListener('mouseenter', linkduo.current.style.transform = 'translate(20%)');
        linkduo.current.addEventListener('mouseLeave', animateIt);
    

        console.log(linkduo.current);


        gsap.from(blockOne.current, {duration: 3, x: '170vw', ease: 'ease'})
        gsap.from(blockTwo.current, {duration: 3, x: '170vw', ease: 'ease', delay: .5})  
        gsap.from(blockThree.current, {duration: 3, x: '170vw', ease: 'ease', delay: 1})  
        gsap.from(greetingsRef.current, {duration: 3, y: -500, opacity: .5, ease: 'easeout'})
        gsap.from(headerRef.current, {duration: 3, opacity: 0, scale: 1.2, ease: 'easeout', delay: 3})
        gsap.from(textRef.current, {duration: 3, opacity: 0, ease: 'easeout', delay: 3.5})
        gsap.to(headerRef.current, {duration: 8, scale: 5, ease: 'ease', delay: 3, scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            start: "center 45vh",
            end: "top center",
            marker: true,
            toggleActions: "restart complete reverse reset"
        }})
        gsap.to(mainContentRef.current, {duration: 3, opacity: 0, ease: 'easeout', scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            start: "top top",
            end: "bottom center",
            markers: true,
            pin: true,
            toggleActions: "restart complete reverse reset"
        }})
        // gsap.to(greetingsRef.current, {duration: 3, opacity: 0, ease: 'easeout', scrollTrigger: {
        //     trigger: containerRef.current,
        //     scrub: 1,
        //     start: "150px top",
        //     end: "bottom 70%",
        //     markers: true,
        //     toggleActions: "restart complete reverse reset"
        // }})
        // gsap.to(textRef.current, {duration: 3, opacity: 0, ease: 'easeout', scrollTrigger: {
        //     trigger: containerRef.current,
        //     scrub: 1,
        //     start: "150px top",
        //     end: "bottom 70%",
        //     markers: true,
        //     toggleActions: "restart complete reverse reset"
        // }})
    }, [])

    useEffect(() => {
        console.log(time);
       let handleTime = setInterval(() => {
            setTime(new Date().getHours())
        }, 1000);
        return () => {
            clearInterval(handleTime)
        }
    }, [])

    useEffect(() => {
        if (time >= 4 && time < 12) {
            setSalute("Hello, Good Morning..." )
            return
        }
        if (time >= 12 && time < 16) {
            setSalute("Howdy, Good Afternoon...")
            return
        }
        if (time >= 16 && time < 20) {
            setSalute("Holla, Good Evening...")
            return
        }
        if (time >= 20 && time < 23 || time >= 0 & time < 4) {
            setSalute("HEY, Good Night...")
            return
        }
        setSalute()
    }, [time])

    return (
        <div className="home" ref={containerRef}>
            {/* <div className="ring">
                <img src={linkOne} alt="" className='one'/>
                <img src={linkTwo} alt="" className='two'/>
                <img src={linkThree} alt="" className='three'/>
                <img src={linkFour} alt="" className='four'/>
                <img src={linkFive} alt="" className='five'/>
            </div> */}
            <div className="backdrop">
                {/* <div className="one" ref={blockOne}></div>
                <div className="two" ref={blockTwo}></div>
                <div className="three" ref={blockThree}></div> */}
                <div className="uno" ref={blockOne}></div>
                <div className="duo" ref={blockTwo}></div>
                <div className="trois" ref={blockThree}></div>
            </div>
            <div className="main_content" ref={mainContentRef}>
                <img src={linkOne} alt="" className='one'/>
                <p className='two' ref={linkduo}>Test One</p>
                <img src={linkThree} alt="" className='three'/>
                <img src={linkFive} alt="" className='five'/>
                <img src={linkFive} alt="" className='seven'/>
                <h3 className="salutation" ref={greetingsRef}>{salute}</h3>
                <h2 ref={headerRef}>I'm <span>Raphael</span> Uwadone</h2>
                <p ref={textRef}>A Front-end Web Developer with a passion for using modern technology to build cool stuff.</p>
            </div>
        </div>
    )
}

export default Home
