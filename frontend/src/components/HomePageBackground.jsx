"use client";

import { cn } from "../lib/utils";
import DotPattern from "./magicui/dot-pattern";
import { Button } from "./ui/button";

const DotPattern1 = () => {
  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-between overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl mt-5">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white mt-[200px]">
        Get Mentorship and recognition for Your research from Around the globe
      </p>
      <Button className="w-[200px] mt-10 mb-[300px]">Get Mentorship</Button>
      <DotPattern
        width={20}
        height={20}
        cx={10}
        cy={10}
        cr={1}
        className={cn(
          "absolute inset-0 z-0", // This makes the dot pattern cover the background
        )}
      />
    </div>
  );
};

export default DotPattern1;
