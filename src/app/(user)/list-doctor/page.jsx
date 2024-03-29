"use client";

import { HomeOutlined } from "@ant-design/icons";
import BannerBreadcrumb from "@/components/user/BannerBreadcrumb";
import { useQuery } from "react-query";
import Base from "@/models/Base";
import CardDoctor from "@/components/user/CardDoctor";
import { Spin } from "antd";

export default function ListDoctor() {
  const breadcrumb = [
    {
      href: "/",
      title: (
        <>
          <HomeOutlined />
          <span>Trang chủ</span>
        </>
      ),
    },
    {
      href: "/contact",
      title: (
        <>
          <span className="text-[#2490eb]">Danh sách nhân sự</span>
        </>
      ),
    },
  ];

  // api lấy danh sách tất cả bác sĩ
  const { data: listDoctor, isFetching } = useQuery(
    ["getAllDoctorUser"],
    async () => {
      const res = await Base.getAllDoctor();

      return res;
    },
    {}
  );

  return (
    <div className="flex flex-col items-center mb-36 ">
      <BannerBreadcrumb title="Danh sách nhân sự" breadcrumb={breadcrumb} />
      <div className="container-original  sm:pb-24 pb-0  sm:mt-32 mt-16">
        <div className="flex flex-col items-center">
          <div className=" px-2 py-1 bg-[#d3e9fb] rounded">
            <p className="text-[#2490eb] font-semibold">
              Đội ngũ của chúng tôi
            </p>
          </div>
          <p className="text-5xl font-semibold mt-4 mb-11 text-center">
            Những chuyên gia hàng đầu
          </p>
        </div>
        <Spin spinning={isFetching}>
          <div className="flex gap-4 flex-wrap md:px-0 px-4 justify-center">
            {listDoctor?.map((doctor, index) => (
              <CardDoctor
                title={index}
                name={doctor?.Name}
                imagePath={doctor?.ImagePath}
                position={doctor?.Position}
                startWorkDate={doctor?.StartWorkDate}
                endWorkDate={doctor?.EndWorkDate}
              />
            ))}
          </div>
        </Spin>
      </div>
    </div>
  );
}
