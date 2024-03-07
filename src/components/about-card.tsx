import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import Image from 'next/image'

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  imageName: string;
  paper_links: string;
}

export function AboutCard({ title, description, subTitle,imageName,paper_links }: AboutCardProp) {
  return (
    <Card shadow={false} placeholder={""}>
      <CardBody className="h-[700px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-800 " placeholder={""}>
        {/* <img src={imageName} alt="next/image" className="w-512 h-512 mb-2"/> */}

        <Typography variant="h4" className="text-center" color="white" placeholder="">

          {title}
        
        </Typography>

        <Image
        src={`/image/${imageName}`}
        width={500}
        height={500}
        alt="next/image"
      />
        <Typography variant="h6" className="mb-4 text-center" color="white" placeholder="">

          {subTitle}
        </Typography>

        
        
        <Typography
        placeholder={""}
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
        >
          {description}
        </Typography>
        
        <Button color="white"  placeholder={""}>
        <Typography placeholder={""} color="blue-gray" className="mt-2 mb-2 text-base w-full lg:w-8/8 text-center font-normal">

        <a href={paper_links} className="text-gray" target="_blank">
          More Details
        </a>
      </Typography>
        
        </Button>

      </CardBody>
    </Card>
  );
}


export default AboutCard;
