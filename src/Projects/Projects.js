import React, { useRef, useEffect } from "react";
import { projects } from "../ProjectList";
import SingleProject from "./SingleProject";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const panelsContainer = useRef();
  // const panelRef = useRef()
  const panels = useRef([]);
  panels.current = [];
  ScrollTrigger.saveStyles(panelsContainer.current)
  //   const createPanelsRefs = (panel, index) => {
  //     panels.current[index] = panel;
  //     console.log(panel);
  //   };
  //   createPanelsRefs()

  const createRefs = (el) => {
    console.log(el);
    if (el && !panels.current.includes(el)) {
        panels.current.push(el);
    }
  };

  useEffect(() => {
    const totalPanels = panels.current.length;
    console.log(panels, panelsContainer.current.offsetWidth,);
    ScrollTrigger.matchMedia({
      "(min-width: 769px)" : () => {
          gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
              trigger: panelsContainer.current,
              pin: true,
              start: "top 100px",
              scrub: 1,
              snap: 1 / (totalPanels - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: () => "+=" + panelsContainer.current.offsetWidth,
            },
          });
      }
    })
  }, []);
  let projNum = Array.from(Array(projects.length).keys());
  return (
    <div className="project-container" ref={panelsContainer} id="projects">
      {projects.map((project, index) => (
        <div
        key={index}
          className="single"
          style={{
            backgroundColor: `${project.id % 2 == 0 ? "#000" : "#FFF"}`,
          }}
          ref={createRefs}
        >
          <div className="single-content">
            <div className="left-content"
            style={{
                color: `${project.id % 2 == 0 ? "#fff" : "#000"}`,
              }}
            >
              <div>
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
              </div>
              <div className="btn-container">
                <button className="btn live"
                >Go Live</button>
                <button className="btn git"
                style={{
                    color: `${project.id % 2 == 0 ? "#fff" : "#000"}`,
                    borderColor: `${project.id % 2 == 0 ? "#fff" : "#000"}`
                  }}
                >Go Git</button>
              </div>
              <ul>
                {projNum.map((p, i) => (
                  <li 
                  className={`${i < 4 ? 'strike' : ""}`}
                  key={i}
                  style={{
                    borderColor: `${project.id % 2 == 0 ? "#BDD0FF" : "#5786FF"}`,
                      background: `${project.id % 2 == 0 ? project.id === i ? "#BDD0FF" : "transparent" : project.id === i ? "#5786FF" : "transparent"}`,
                      color: `${project.id % 2 == 0 ? project.id === i ? "black" : "#BDD0FF" : project.id === i ? "#fff" : "#5786FF"}`
                  }}
                  >{p + 1}</li> 
                ))}
              </ul>
            </div>
            <img src={project.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
