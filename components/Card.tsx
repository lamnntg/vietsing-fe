"use client";
import { RoutesEnum } from "@/constants/app.constants";
import { ProjectDef } from "@/types/project.type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type CardProps = {
  project: any;
};

const Card: FC<CardProps> = ({ project }) => {
  return (
    <div>
      <Link href={RoutesEnum.COMPLETED + "/" + project.id}>
        <div className="w-full relative overflow-hidden group cursor-pointer">
          <div className="w-full">
            <img
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              src={project.images[0]}
              alt="project"
              className="group-hover:scale-110 transition-all duration-300 h-[220px] md:h-[280px] lg:h-[320px]"
            />
          </div>
          <div className="py-2 px-6 absolute transition-all duration-300 group-hover:bottom-0 bottom-[100%] flex items-center left-0 w-full h-full backdrop-blur-[3px] bg-[rgb(0,0,0,0.4)] text-white">
            <p className="text-xl font-semibold mb-3 text-center">
              {project.name}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-primary text-xs font-medium">
            {project.job_title}
          </p>
          <p className="text-lg">{project.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
