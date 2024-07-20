import Card from "@/components/Card";
import { ProjectDef } from "@/types/project.type";
import project from "@/data/project.json";

const page = () => {
  return (
    <div className="container mx-auto px-2 py-[80px] pt-[40px]">
      <h1 className="text-2xl md:text-4xl font-medium text-center py-10 pt-[100px] uppercase">
        CÁC dự án của Việt Sing
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {(project as ProjectDef[]).map((item) => (
          <Card key={item.name} project={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
