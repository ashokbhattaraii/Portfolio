import Project from "./project";
import { useForm } from "react-hook-form";
4;
import { useState } from "react";
import Button from "../../Resualble_Components/Button";
import { log } from "console";
interface ProjectDetail {
  name: string;
  content: string;
}
interface DetailedProjectsProps {
  projects: ProjectDetail[];
  onAddProject: (newProject: ProjectDetail) => void;
}
export default function DetailedProjects({ projects, onAddProject }: any) {
  const [addForm, toogleAddForm] = useState(false);
  const toogleForm = () => {
    toogleAddForm(!addForm);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProjectDetail>();

  const onSubmit = (data: ProjectDetail) => {
    onAddProject(data);
  };
  return (
    <>
      <div id="detailProjectDisplay" className="text-black ml-22 max-w-2/3 ">
        <h2 className="text-blue-700 font-bold">Projects</h2>

        <div id="detailedList" className="flex flex-wrap gap-8 text-blue-600">
          <Project Projects={projects} />
          <div
            id="AddProjects"
            className=" h-30 w-30 border rounded-2xl relative flex justify-center"
            onClick={toogleForm}
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
      {addForm && (
        <div
          id="overlayModal"
          className="fixed inset-0 z-100 flex justify-center items-center"
        >
          <div
            id="ProjectForm"
            className={`bg-gray-700 w-80  rounded-2xl text-white shadow-xl shadow-gray-500 `}
          >
            <form className="flex flex-col p-4">
              <h1 className="font-bold text-2xl mx-auto mb-4">Add Projects</h1>
              <span>Name</span>
              <input
                type="text"
                id="projectName"
                className="border outline-0 pl-4 py-2 rounded-2xl my-3"
                placeholder="Project Name"
                {...register("name")}
              />
              <span>Content</span>
              <textarea
                id="content"
                rows={6}
                className="border outline-0 pl-4 py-2 rounded-2xl my-3"
                {...register("content")}
              />
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Add Project
              </Button>
              <button
                type="button"
                onClick={toogleForm}
                className="text-sm mt-2 text-red-300"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
