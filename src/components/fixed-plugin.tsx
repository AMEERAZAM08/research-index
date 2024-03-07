"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://huggingface.co/ameerazam08" target="_blank">
      <Button placeholder={""}
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
        />{" "}
        Follow me At 
      </Button>
    </a>
  );
}
