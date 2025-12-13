"use client";
import Button from "../Resualble_Components/Button";
import SideBar from "../Components/projects/sidebar";
import DetailedProjects from "../Components/projects/detailedProjects";
import { useState } from "react";

interface ProjectsDetail {
  name: string;
  content: string;
}
const Projects = () => {
  const [ProjectList, setProjectList] = useState<Projects[]>([]);

  function addProject(newProjecct: Projects) {
    setProjectList((prevProjects) => {
      return [...prevProjects, newProjecct];
    });
  }
  return (
    <>
      <div
        id="projectContainer"
        className="text-white relative top-6 flex w-full mx-auto"
      >
        <SideBar Projects={ProjectList} />

        <DetailedProjects projects={ProjectList} onAddProject={addProject} />
      </div>
    </>
  );
};

const Projects = () => {
  const [ProjectList, SetProjectList] = useState<ProjectsDetail[]>([]);
  const AddProject = (data: ProjectsDetail) => {
    SetProjectList((prevProject) => {
      return [...prevProject, data];
    });
  };
  return (
    <>
      <div
        id="projectContainer"
        className="text-white relative top-6 flex w-full mx-auto"
      >
        <SideBar Projects={ProjectList} />
        <DetailedProjects Projects={ProjectList} onAddProject={AddProject} />
      </div>
    </>
  );
};

export default Projects;
