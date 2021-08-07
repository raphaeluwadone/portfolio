import React from "react";
import { projects } from "../ProjectList";

function SingleProject({ project }) {
  let projNum = Array.from(Array(projects.length).keys());
  return (
    <div
      className="single"
      style={{
        backgroundColor: `${project.id % 2 == 0 ? "#000" : "#FFF"}`,
      }}
    >
      <div className="single-content">
        <div className="left-content">
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <div className="btn-container">
            <button className="btn">Go Live</button>
            <button className="btn git">Git</button>
          </div>
          <ul>
              {projNum.map((p,i) => (
                  <li key={i}>{p+1}</li>
              ))}
          </ul>
        </div>
        <img src={project.img} alt="" />
      </div>
    </div>
  );
}

export default SingleProject;
