import { heroData } from "../../../config/site-data";
import { Button } from "../ui/button";
import Image from "next/image";

const Index = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 items-center">
      <div className="p-4 flex flex-col gap-4">
        <p className="text-4xl font-bold">👨🏻‍💻 👨‍🏫</p>
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">{heroData.Primary_hero_text}</h1>
          <p className="text-lg text-gray-600">
            {heroData.secondary_hero_text}
          </p>
          <Button variant={"secondary"} className="w-[150px] h-12">
            {heroData.buttonText}
          </Button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center p-8">
        <Image
          src="/me.png"
          alt="hero image of a person learning"
          className="object-cover rounded-full border-2 border-black"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Index;
