import Card from "@/components/Card";
import { ProjectDef } from "@/types/project.type";
import project from "@/data/project.json";

const page = () => {
  return (
    <div className="container mx-auto px-2 py-[80px] pt-[160px]">
      <h1 className="text-center uppercase text-[32px] pb-[80px]">
        CÁC sản phẩm của Việt Sing
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
