"use client";
import Button from "../Resualble_Components/Button";
import SideBar from "../Components/projects/sidebar";
import { useState } from "react";
import DetailedProjects from "../Components/projects/detailedProjects";

interface Projects {
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

export default Projects;
