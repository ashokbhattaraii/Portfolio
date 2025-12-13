"use client";
interface ProjectDetail {
  name: string;
  content: string;
}

// 🛑 NEW PROPS INTERFACE
interface SideBarProps {
  Projects: ProjectDetail[];
}
export default function Project({ Projects }: SideBarProps) {
  return (
    <>
      {Projects.map((project, index) => {
        return (
          <div
            key={index}
            id="project1"
            className="h-30 w-30 bg-gray-500 relative rounded-2xl flex justify-center"
          >
            <p className="absolute -bottom-7 ">{project.name}</p>
          </div>
        );
      })}
    </>
  );
}
