"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

import React from 'react';
const EVENT_INFO = [
  {
    title: "Paper Title",
    description:
    "Discriptions",
    subTitle: "Paper Tag Lipsync",
    imageName : "avatar1.jpg",
    paper_links :"https://arxiv.org/pdf/2402.16607.pdf"
  },
  {
    title: "Paper Title",
    description:
    "Discriptions",
    subTitle: "Paper Tag Lipsync",
    imageName : "avatar1.jpg",
    paper_links :"https://arxiv.org/pdf/2402.16607.pdf"
  },
  {
    title: "Paper Title",
    description:
    "Discriptions",
    subTitle: "Paper Tag Lipsync",
    imageName : "avatar1.jpg",
    paper_links :"https://arxiv.org/pdf/2402.16607.pdf"
  },
  {
    title: "Paper Title",
    description:
    "Discriptions",
    subTitle: "Paper Tag Lipsync",
    imageName : "avatar1.jpg",
    paper_links :"https://arxiv.org/pdf/2402.16607.pdf"
  },
 
];

export function AboutEvent() {
  return (

    <section className="container mx-auto flex flex-col items-center px-1 py-2">
      

      <Typography variant="h6" className="text-center mb-2" color="orange" placeholder="">
        Every Days Update
      </Typography>
      <Typography variant="h6" className="text-center mb-2"  color="blue-gray" placeholder="">
        Daily Top Papers
      </Typography>

      <Typography  variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"  color="blue-gray" placeholder="">
        Contribute to the AI community by sharing your insights and expertise
      </Typography>

      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
      </div>

    </section>
  );
}

export default AboutEvent;
