interface ProjectDetail {
  name: string;
  content: string;
}

export default function Project({ project }: any) {
  return (
    <>
      {project.map((p: any, index: any) => {
        return (
          <div
            id="project1"
            key={index}
            className="h-30 w-30 bg-gray-500 relative rounded-2xl  flex justify-center"
          >
            <p className="absolute -bottom-7 ">{p.name}</p>
          </div>
        );
      })}
    </>
  );
}
