import sgMail from "@sendgrid/mail";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  // Handle form submission
  async function handleSubmit(formData: FormData) {
    "use server";
    console.log("Form Data", formData);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const rawformData = {
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New message from ${formData.get("name")}`,
      text: formData.get("message"),
    };

    try {
      await sgMail.send({
        ...rawformData,
        text: `From: ${formData.get("email")}\n\n${formData.get("message")}`,
      });
      console.log("Email Send Successfully!");
    } catch (error) {
      // Send an error response
      console.log(error);
      console.log("Something went wrong, please try again!");
    }
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg font-semibold text-gray-800">
          Name
        </label>
        <Input type="text" id="name" name="name" placeholder="Your Name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-semibold text-gray-800">
          Email
        </label>
        <Input type="email" id="email" name="email" placeholder="Your Email" />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-lg font-semibold text-gray-800"
        >
          Message
        </label>
        <Textarea id="message" name="message" placeholder="Your Message" />
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ContactForm;
