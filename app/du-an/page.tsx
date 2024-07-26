import Card from "@/components/Card";
import { ProjectDef } from "@/types/project.type";
import project from "@/data/project.json";
import ProductFilter from "@/components/ProductFilter";
import ProjectList from "@/components/ProjectList";

const page = () => {
  return (
    <div className="container mx-auto px-2 py-[80px] pt-[40px]">
      <h1 className="text-2xl md:text-4xl font-medium text-center py-10 pt-[60px] md:pt-[100px] uppercase">
        CÁC dự án của Việt Sing
      </h1>
      <div>
        <ProductFilter />
      </div>
      <ProjectList />
    </div>
  );
};

export default page;
