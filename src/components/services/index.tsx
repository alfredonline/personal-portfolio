import { services } from "../../../config/site-data";

const Index = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold">
        Quick{" "}
        <span className="relative">
          facts
          <div
            className="w-[100px] h-[5px] skew-x-12 absolute"
            style={{ bottom: "-10%", left: "-10px", 
                backgroundColor: "#f59e0b"

            }}
          ></div>
        </span>
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="p-4 border border-gray-200 rounded-lg flex flex-col gap-4"
            >
              <p className="text-4xl">{service.icon}</p>
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p className="text-lg text-gray-600">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
