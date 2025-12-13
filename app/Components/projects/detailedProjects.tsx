"use client";
import { useState } from "react";
import Project from "./project";
import Button from "../../Resualble_Components/Button";
import { useForm } from "react-hook-form";

interface ProjectDetail {
  name: string;
  content: string;
}

interface DetailedProjectProps {
  Projects: ProjectDetail[];
  onAddProject: (newProject: ProjectDetail) => void;
}

export default function DetailedProjects({
  Projects,
  onAddProject,
}: DetailedProjectProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isFormOpen, toogleForm] = useState(false);

  function onClickAdd() {
    toogleForm(!isFormOpen);
  }
  const onSubmit = (data: any) => {
    onAddProject(data);
    toogleForm(false);
  };
  return (
    <>
      <div id="detailProjectDisplay" className="text-black ml-22 max-w-2/3 ">
        <h2 className="text-blue-700 font-bold">Projects</h2>
        <div id="detailedList" className="flex flex-wrap gap-8 text-blue-600">
          <Project project={Projects} />
          <div
            id="AddProjects"
            className="h-30 w-30 border rounded-2xl relative flex justify-center"
            onClick={onClickAdd}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/android/24/1A1A1A/plus.png"
              alt="add"
              className="absolute top-[40%] "
            />
            <p className="absolute -bottom-7">Add</p>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div
          id="overlayForm"
          className="text-white  fixed inset-0 z-100 flex justify-center items-center"
        >
          <form className="flex flex-col bg-gray-700 rounded-2xl gap-3 w-80 p-3">
            <h1 className="text-center text-blue-700 font-black text-2xl">
              Add Project
            </h1>
            <span>Name</span>
            <input
              type="text"
              placeholder="Project Name"
              className="border py-3 rounded-2xl pl-2 outline-0"
              {...register("name")}
            />
            <span>Content</span>
            <textarea
              id="projectContent"
              rows={6}
              className="border py-3 rounded-2xl pl-2 outline-0"
            ></textarea>
            <Button
              varient="primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Add Project
            </Button>
            <Button
              variant="danger"
              className=""
              onClick={() => {
                toogleForm(false);
              }}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
