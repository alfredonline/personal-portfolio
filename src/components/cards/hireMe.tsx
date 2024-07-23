import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hireMeParagraph } from "../../../config/site-data";

function HireMe({ isContactPage }: { isContactPage?: boolean }) {
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
        <Image
          src="/me.png"
          alt="Hire me"
          className="object-cover rounded-full border-2 border-black"
          width={250}
          height={250}
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
      <p className="text-lg text-gray-600"
        style={{
            textAlign: isContactPage ? "center" : "left",
        }}
      >{hireMeParagraph}</p>
      {!isContactPage && (
        <Button variant="default" size="default">
          Contact me
        </Button>
      )}
    </div>
  );
}

export default HireMe;