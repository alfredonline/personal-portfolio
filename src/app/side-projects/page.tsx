import Projects from "@/components/projects";

const Page = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: "#fff7e8" }}>
      <br />
      <h2 className="text-4xl font-bold">
        Side{" "}
        <span className="relative">
          projects
          <div
            className="w-[170px] h-[5px] skew-x-12 absolute"
            style={{ bottom: "-10%", left: "-10px", 
                backgroundColor: "#f59e0b"

            }}
          ></div>
        </span>
      </h2>
      <br />
      <p className="text-lg text-gray-600">
        As a developer with a full time job, I only have a few side projects that I work on in my free time. Here are some of them.
      </p>
      <br />
      <br />
      <Projects />
    </div>
  );
};

export default Page;
