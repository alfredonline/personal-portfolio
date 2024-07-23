"use client";
import Link from "next/link";
import { navItems, siteName } from "../../../config/site-data";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import MobileNav from "./mobile";





const Index = () => {
  const path = usePathname();

  return (
    <nav className="p-8 border-b-2 border-b-black h-[80px] flex items-center justify-between">
      <div className="flex items-center w-full md:gap-4">
        <Link href="/" className="text-2xl font-bold">
          {siteName}
        </Link>
        <div className="ml-auto md:ml-0">
          <MobileNav />
        </div>
        <div className="items-center space-x-4 hidden lg:flex">
          {navItems?.map(
            (
              item: {
                name: string;
                url: string;
              },
              index
            ) => {
              return (
                <Link
                  key={index + item.name}
                  href={item.url}
                  className={`${
                    (item.url === "/" && path === "/") ||
                    (item.url !== "/" && path.startsWith(item.url))
                      ? "bg-orange-500 rounded-full px-4 py-2 w-[100px] font-semibold flex justify-center"
                      : "rounded-full px-4 py-2 w-[100px] flex justify-center font-semibold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            }
          )}
        </div>
      </div>
      <Button
        variant={"default"}
        size={"default"}
        className="hidden lg:flex p-6"
      >
        Get in touch
      </Button>
    </nav>
  );
};

export default Index;
