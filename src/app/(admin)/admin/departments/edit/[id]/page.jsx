"use client";
import { Breadcrumb, Button, Input, Space, Table, Tag } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import styled from "@emotion/styled";
import CreateOrEdit from "../../../../../../components/admin/common/CreateOrEdit";

export default function EditDepartment({ params }) {
  const idDepartment = params?.id;
  const breadcrumb = [
    {
      href: "/admin/home",
      title: (
        <>
          <HomeOutlined />
          <span>Trang chủ</span>
        </>
      ),
    },
    {
      href: "/admin/departments",
      title: (
        <>
          <span className="text-cyan-700">Danh sách khoa</span>
        </>
      ),
    },
    {
      href: "/admin/departments/create",
      title: (
        <>
          <span className="text-cyan-700">Chỉnh sửa Khoa</span>
        </>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb className="mb-5" items={breadcrumb} />

      <CreateOrEdit typePage="department" id={idDepartment} actionType="edit" />
    </div>
  );
}
