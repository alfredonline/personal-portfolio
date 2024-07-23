import Projects from "@/components/projects";
import { sideProjectsSubheading } from "../../../config/site-data";

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
            style={{
              bottom: "-10%",
              left: "-10px",
              backgroundColor: "#f59e0b",
            }}
          ></div>
        </span>
      </h2>
      <br />
      <p className="text-lg text-gray-600">{sideProjectsSubheading}</p>
      <br />
      <br />
      <Projects />
    </div>
  );
};

export default Page;
