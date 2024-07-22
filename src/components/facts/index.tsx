import { services } from "../../../config/site-data";

const Index = () => {
  return (
    <div className="p-8" style={{ backgroundColor: "#fff7e8" }}>
      <h2 className="text-4xl font-bold">
        Quick{" "}
        <span className="border-orange-500 border-b-4">
          facts
        </span>
      </h2>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="p-4 border-2 border-black flex flex-col gap-4 bg-white"
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