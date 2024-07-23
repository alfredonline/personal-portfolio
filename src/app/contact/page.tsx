import HireMe from "@/components/cards/hireMe";
import ContactForm from "@/components/contactForm";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="h-full">
        <br />
        <br />
        <br />
        <HireMe 
            isContactPage={true}
        />
      </div>
      <div className="flex flex-col p-8">
        <h2 className="text-4xl font-bold text-center mt-20">Contact Me</h2>
        <br />
        <ContactForm 
            
        />
      </div>
    </div>
  );
};

export default Page;
