"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import project from "@/data/project.json";
import { ProjectDef } from "@/types/project.type";
import Card from "./Card";
import { useSearchParams } from "next/navigation";

const ProjectList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [projectList, setProjectList] = useState<ProjectDef[]>(
    project as ProjectDef[]
  );
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("category");
    if (category && category !== "all") {
      setProjectList(() =>
        (project as ProjectDef[]).filter((item) => item.category === category)
      );
    } else {
      setProjectList(project as ProjectDef[]);
    }
  }, [searchParams]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {projectList.map((item) => (
          <Card key={item.name} project={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
