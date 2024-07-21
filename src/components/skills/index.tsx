import { experience, currentRole, socialMedia } from "../../../config/site-data";
import { Card } from "@/components/ui/card";
import { FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const icons = [
  { name: "React", icon: FaReact },
  { name: "MongoDB", icon: DiMongodb },
  { name: "Node.js", icon: DiNodejs },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGitAlt },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Azure DevOps", icon: SiAzuredevops },
  { name: "Next.js", icon: RiNextjsFill },
];

function HireMe() {
  return (
    <div className="flex flex-col items-center gap-4 mx-auto max-w-[600px] p-8">
      <div className="flex items-center gap-4">
        <h2
          className="text-4xl -rotate-12 hidden md:block"
          style={{
            color: "#3b82f6",
          }}
        >
          &lt;&gt;
        </h2>
        <img
          src="/me.png"
          alt="Hire me"
          className="w-72 h-72 object-cover rounded-full border-2 border-black"
        />
        <h2
          className="text-4xl rotate-12 hidden md:block"
          style={{
            color: "#3b82f6",
          }}
        >
          &lt;/&gt;
        </h2>
      </div>
      <h2 className="text-4xl font-bold">Let&apos;s work together!</h2>
      <p className="text-lg text-gray-600">
        I am interested in working on web apps that focus on language learning.
        You can contact me if you have a project that you would like to
        collaborate on.
      </p>
      <Button variant="default" size="default">
        Contact me
      </Button>
    </div>
  );
}

function EmployeeCard({
  Role,
  Company,
  StartDate,
  EndDate,
  Location,
  Name,
}: {
  Role: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  Location: string;
  Name: string;
}) {
  return (
    <Card className="w-full max-w-sm p-6 grid gap-6">
      <div className="flex items-center gap-4">
        <div className="rounded-md h-24 w-24">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zZ0ZiaHY19rt6SLsu-PvczHsACqaatJTj3uTG7DJ4ijSn74d05NMlOx3eecxZ2v3BsA&usqp=CAU"
            width={32}
            height={32}
            alt="Company Logo"
            className="w-72 h-24 text-primary-foreground object-cover"
          />
        </div>
        <div className="grid gap-1">
          <h3 className="text-xl font-semibold">{Name}</h3>
          <p className="text-muted-foreground">{Role}</p>
        </div>
      </div>
      <div className="grid gap-2 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Start Date:</span>
          <span>{StartDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>End Date:</span>
          <span>{EndDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Location:</span>
          <span>{Location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Company:</span>
          <span>{Company}</span>
        </div>
      </div>
    </Card>
  );
}

const Index = () => {
  return (
    <div>
      <div className="flex justify-between p-8 flex-wrap gap-4">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold flex flex-col">
            <div className="flex items-center">
              <div>Skills</div>{" "}
              <div className="relative ml-2">
                and
                <div
                  className="w-[100px] h-[5px] skew-x-12 absolute"
                  style={{
                    bottom: "-10%",
                    left: "-10px",
                    backgroundColor: "#f59e0b",
                  }}
                ></div>
              </div>
            </div>
            <div>experience</div>
          </h2>
          <p className="max-w-[600px] text-lg text-gray-600">{experience}</p>
        </div>
        <EmployeeCard
          Role={currentRole.jobTitle}
          Company={currentRole.company}
          StartDate={currentRole.startDate}
          EndDate={currentRole.endDate}
          Location={currentRole.location}
          Name={currentRole.name}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 p-8">
        {icons.map(({ icon: Icon }, index) => (
          <div
            key={index}
            className="border p-4 rounded-md border-black w-48 flex gap-4 items-center justify-center"
          >
            {<Icon size={32} />}
            <div className="text-lg font-semibold">{icons[index].name}</div>
          </div>
        ))}
      </div>
      <HireMe />
      <div className="flex items-center gap-4 p-8 flex-wrap justify-center">
      {
        socialMedia.map((social, index) => (
            <div key={index} className="flex items-center gap-4">
                <social.icon size={32} />
                <a href={social.url} className="text-lg font-semibold">{social.name}</a>
            </div>
        ))
      }
      </div>
    </div>
  );
};

export default Index;
