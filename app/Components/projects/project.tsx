"use client";

export default function Project({
  children,
  Projects,

  onClick,
}: any) {
  return (
    <>
      {Projects.map((project: any, index: any) => {
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
