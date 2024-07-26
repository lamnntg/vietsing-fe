import React from "react";
import { DotButton } from "@/components/DotButton";
import ProjectDetail from "@/components/ProjectDetail";
import project from "@/data/project.json";
import { ProjectDef } from "@/types/project.type";

export default function Page({ params }: { params: { slug: string } }) {
  const data = (project as ProjectDef[]).find(
    (item) => `${item.id}` === `${params.slug}`
  );
  if (!data) {
    return null;
  }

  return (
    <div className="container mx-auto px-2 py-[80px] md:pt-[200px]">
      <ProjectDetail project={data} />
    </div>
  );
}
