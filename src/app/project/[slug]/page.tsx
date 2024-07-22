import { projects } from "../../../../config/site-data";

import { cn } from "@/lib/utils";

function Container(props: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
  alt?: boolean;
}) {
  return (
    <div
      className={cn(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

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
        <div className="p-8 min-h-screen">
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
      </article>
    </Container>
  );
};

export default Page;
