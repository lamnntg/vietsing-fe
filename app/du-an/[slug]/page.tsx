import React from "react";
import { DotButton } from "@/components/DotButton";
import ProjectDetail from "@/components/ProjectDetail";

export default function Page({ params }: { params: { slug: string } }) {
  // const project = (data as ProjectDef[]).find(
  //   (item) => item.slug === params.slug
  // );
  // if (!project) {
  //   return null;
  // }
  return (
    <div className="container mx-auto px-2 py-[80px] md:pt-[200px]">
      <ProjectDetail />
    </div>
  );
}
