"use client";
import { siteName, navItems } from "../../../../config/site-data";
import { Button } from "../../ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { LinkProps } from "next/link";
import { cn } from "../../../lib/utils";
import { ScrollArea } from "../../ui/scroll-area";
import Link from "next/link";


interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
  }
  
  function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
  }: MobileLinkProps) {
    return (
      <Link
        href={href}
        onClick={() => {
          onOpenChange?.(false);
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </Link>
    );
  }

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="mr-2 p-4 text-base bg-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          style={{
            backgroundColor: "white",
          }}
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center text-2xl"
          onOpenChange={setOpen}
        >
          <span className="font-bold">{siteName}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            {navItems?.map(
              (item) =>
                item.url && (
                  <MobileLink
                    key={item.url}
                    href={item.url}
                    onOpenChange={setOpen}
                    className="text-lg"
                  >
                    {item.name}
                  </MobileLink>
                )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
