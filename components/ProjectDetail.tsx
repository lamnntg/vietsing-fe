"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";

const slides = [
  "https://console.minio.echodesign.vn/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9iaWV0dGh1LzEwLiBNUiBMScOKTiAtIFFV4bqiTkcgTklOSC9NUiBMScOKTiAtIFFV4bqiTkcgTklOSC4xLmpwZw==&version_id=null",
  "https://console.minio.echodesign.vn/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9iaWV0dGh1LzEwLiBNUiBMScOKTiAtIFFV4bqiTkcgTklOSC9NUiBMScOKTiAtIFFV4bqiTkcgTklOSC4xMC5qcGc=&version_id=null",
  "https://console.minio.echodesign.vn/api/v1/buckets/echo/objects/download?preview=true&prefix=RGF0YS9iaWV0dGh1LzEwLiBNUiBMScOKTiAtIFFV4bqiTkcgTklOSC9NUiBMScOKTiAtIFFV4bqiTkcgTklOSC4yLmpwZw==&version_id=null",
];
// Import Swiper styles
import { CalendarDays, Layers, Layers3, MapPin, User } from "lucide-react";
import { ProjectDef } from "@/types/project.type";
import { FC } from "react";

type ProjectDetailProps = {
  project: ProjectDef;
};

const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div>
      <div className="grid grid-cols-1 xl::grid-cols-3 md:grid-cols-2 lg:gap-[100px] md:gap-14 gap-4">
        <div className="col-span-2 md:col-span-1">
          <Swiper
            // install Swiper modules
            modules={[
              Autoplay,
              EffectFade,
              FreeMode,
              Navigation,
              Thumbs,
              Pagination,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="detail"
          >
            {project.images.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide}
                  className="w-full aspect-[4/3] object-cover"
                  alt="slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <h3 className="font-medium text-primary mb-1 text-lg">
            {project.job_title}
          </h3>
          <h1 className="text-black font-semibold text-3xl">{project.name}</h1>
          <div className="mt-6">
            <div className="flex gap-3">
              <User className="mt-1" />
              <div>
                <p>Khách hàng</p>
                <p className="text-gray-600 font-medium">{project.customer}</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex gap-3 mt-3">
              <Layers className="mt-1" />
              <div>
                <p>Hạng mục</p>
                <p className="text-gray-600 font-medium">{project.job}</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex gap-3 mt-3">
              <MapPin className="mt-1" />
              <div>
                <p>Địa điểm</p>
                <p className="text-gray-600 font-medium">{project.location}</p>
              </div>
            </div>
            {/* 4 */}
            {project.area && (
              <div className="flex gap-3 mt-3">
                <Layers3 className="mt-1" />
                <div>
                  <p>Quy mô </p>
                  <p className="text-gray-600 font-medium">{project.area}</p>
                </div>
              </div>
            )}
            {/* 5 */}
            <div className="flex gap-3 mt-3">
              <CalendarDays className="mt-1" />
              <div>
                <p>Năm thực hiện dự án</p>
                <p className="text-gray-600 font-medium">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-[60px] md:my-[150px] mb-10 md:mb-[80px] text-3xl font-semibold text-center">
        HÌNH ẢNH DỰ ÁN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {project.images.map((slide, index) => (
          <img
            key={index}
            src={slide}
            className="w-full aspect-[4/3] object-cover rounded-2xl"
            alt="slide"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
