import { professional_life } from "../../../config/site-data";

const Page = () => {
  return (
    <div className="p-8 min-h-screen">
      <br />
      <h2 className="text-4xl font-bold">
        My professional{" "}
        <span className="relative">
          life
          <div
            className="w-[80px] h-[5px] skew-x-12 absolute"
            style={{
              bottom: "-10%",
              left: "-10px",
              backgroundColor: "#f59e0b",
            }}
          ></div>
        </span>
      </h2>
      <br />
      <div className="flex flex-col gap-4">
        {professional_life.map((paragraph) => {
          return <p className="text-lg text-gray-600">{paragraph.paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default Page;
