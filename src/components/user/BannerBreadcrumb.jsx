"use client";

import { Breadcrumb } from "antd";

export default function BannerBreadcrumb(props) {
  const { breadcrumb, title } = props;

  return (
    <div className="h-[360px] w-full flex flex-col items-center justify-center banner-contact ">
      <div className="container-original ">
        <p className="mb-4 text-6xl max-w-3xl max-h-48 overflow-y-hidden overflow-ellipsis line-clamp-2">
          {title}
        </p>
        <Breadcrumb items={breadcrumb} />
      </div>
    </div>
  );
}
