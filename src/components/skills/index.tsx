import {
  experience,
  currentRole,
  socialMedia,
} from "../../../config/site-data";
import { Card } from "@/components/ui/card";
import { skillsIcons } from "../../../config/site-data";
import HireMe from "@/components/cards/hireMe";



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
    <Card className="w-full md:max-w-sm p-6 grid gap-6 rounded-none border-none">
      <div className="flex items-center gap-4">
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
              <div className="ml-2 border-orange-500 border-b-4">
                and
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
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-4 p-8">
          {skillsIcons.map(({ icon: Icon }, index) => (
            <div
              key={index}
              className="border-2 p-4 border-black w-72 flex gap-4 items-center justify-center"
            >
              {
                <Icon
                  size={48}
                  color="white"
                  className="bg-blue-500 p-2 rounded-full"
                />
              }
              <div className="text-lg font-semibold">{skillsIcons[index].name}</div>
            </div>
          ))}
        </div>
        <HireMe />
      </div>
      <div className="flex items-center gap-4 p-8 flex-wrap justify-center">
        {socialMedia.map((social, index) => (
          <div key={index} className="flex items-center gap-4">
            <social.icon size={32} />
            <a href={social.url} className="text-lg font-semibold">
              {social.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
