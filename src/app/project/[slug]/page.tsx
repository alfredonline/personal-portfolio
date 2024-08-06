import { projects } from "../../../../config/site-data";
import Container from "@/components/container";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const getProject = (slug: string) => {
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return null;
  }
  return project;
};

const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const project = params.slug;

  const data = getProject(project);

  return (
    <Container className="!pt-0">
      <article className="mx-auto max-w-screen-md ">
        <div className="p-2 md:p-8 min-h-screen">
          <h2 className="text-4xl font-bold">
            {!data?.title ? project : data.title}
          </h2>
          <br />
          <p className="text-lg text-gray-600">{data?.desc}</p>
          <br />
          <div className="flex gap-4 flex-wrap">
            {data?.stack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  {Icon && <Icon size={30} />}
                </div>
              );
            })}
          </div>
          <br />
          {data?.fullWriteup?.map((section, index) => {
            return (
              <div key={index} className="py-4 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">{section.title}</h3>
                <p className="text-gray-600">{section.content}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 p-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data?.repo}
            className="flex items-center gap-2 bg-black text-white p-4 rounded-md"
          >
            <FaGithub size={30} />
            Repo Link
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data?.link}
            className="flex items-center gap-2 bg-black text-white p-4 rounded-md"
          >
            <TbWorldWww size={30} />
            Live Site
          </a>
        </div>
      </article>
    </Container>
  );
};

export default Page;
