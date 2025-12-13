"use client";
import Button from "@/app/Resualble_Components/Button";
interface ProjectDetail {
  name: string;
  content: string;
}

interface SideBarProps {
  Projects: ProjectDetail[];
}
export default function SideBar({ Projects }: SideBarProps) {
  return (
    <>
      <div
        id="sideProjecList"
        className="h-[81vh] w-65 bg-black p-5 ml-5 rounded-2xl shadow shadow-gray-300 relative"
      >
        <h2 className="text-blue-700 font-bold">PROJECTS</h2>
        <div id="lists" className="ml-6 mt-6">
          <ul className="">
            {Projects.map((project, index) => (
              <li
                key={index}
                className="py-1 cursor-pointer hover:text-blue-400"
              >
                {project.name}
              </li>
            ))}
            <button className="flex items-center gap-2 text-[12px] ml-6 text-blue-700">
              View all{" "}
              <span>
                <img
                  width="13"
                  height="13"
                  src="https://img.icons8.com/ios/50/228BE6/forward--v1.png"
                  alt="forward--v1"
                />
              </span>
            </button>
          </ul>
          <Button variant="primary" className="w-full mt-30 ">
            Hide
          </Button>
        </div>
      </div>
    </>
  );
}
