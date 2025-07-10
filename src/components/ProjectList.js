import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const allprojects = projects.map((project)=>{
    return(
      <ProjectItem key ={project.id} name={project.name}
      about={project.about} technologies={project.technologies}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
          {/* <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies}/> */}
          {allprojects}
      </div>
    </div>
  );
}

export default ProjectList;
