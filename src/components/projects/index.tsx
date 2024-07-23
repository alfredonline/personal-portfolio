import { projects } from "../../../config/site-data";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => {
        return (
          <Link
            key={project.id}
            className="border-2 border-black"
            href={`/project/${project.slug}`}
          >
            <Image
              src={project.imgPreview}
              alt={project.imgAlt}
              className="border-b-2 border-black w-full object-cover"
              width={200}
              height={180}
            />
            <div className="flex gap-2 bg-white">
              <div className="p-4 flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-muted-foreground">{project.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Index;
