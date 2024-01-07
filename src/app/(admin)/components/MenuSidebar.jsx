import { useState } from "react";

import {
  HomeOutlined,
  FileSearchOutlined,
  FolderOpenOutlined,
  MenuOutlined,
  UnorderedListOutlined,
  FileTextOutlined,
  BellOutlined,
  UploadOutlined,
  ApartmentOutlined,
  ClusterOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  PartitionOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import CollapseMemuItem from "./CollapseMemuItem";

const MenuSidebar = (props) => {
  const { isCloseMenu } = props;
  const [indexItemSelected, setIndexItemSelected] = useState(null);

  const lstDataMenu = [
    {
      text: "Trang quản trị",
      icon: <HomeOutlined />,
      pushTo: "/admin/home",
    },
    {
      text: "Quản trị nội dung",
      icon: <FileSearchOutlined />,
      listSubMenu: [
        {
          icon: (
            <UnorderedListOutlined className={`${isCloseMenu && "text-xs"}`} />
          ),
          text: "Danh mục bài viết",
          pushTo: "/admin/categorys",
        },
        {
          icon: <FileTextOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Danh sách bài viết",
          pushTo: "/admin/list-post",
        },
      ],
    },

    {
      text: "Quản lý Đội ngũ",
      icon: <OrderedListOutlined />,
      listSubMenu: [
        {
          icon: <MenuOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Danh sách nhân viên",
          pushTo: "/admin/list-employee",
        },
      ],
    },
    {
      text: "Quản lý Khoa",
      icon: <PartitionOutlined />,
      listSubMenu: [
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Danh sách Khoa",
          pushTo: "/admin/departments",
        },
      ],
    },

    {
      text: "Quản lý Slide",
      icon: <PartitionOutlined />,
      listSubMenu: [
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Danh sách ảnh",
          pushTo: "/admin/list-image",
        },
      ],
    },
    {
      text: "Quản lý File",
      icon: <FolderOpenOutlined />,
      listSubMenu: [
        {
          icon: <UploadOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Upload - Download File",
          pushTo: "/admin/files-manage",
        },
      ],
    },

    {
      text: "Quản lý Tài khoản",
      icon: <UsergroupAddOutlined />,
      listSubMenu: [
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Danh sách tài khoản",
          pushTo: "/admin/accounts-admin",
        },
      ],
    },
  ];

  const handleClickItem = (index) => {
    if (indexItemSelected !== index) {
      setIndexItemSelected(index);
    } else {
      setIndexItemSelected(null);
    }
  };

  return (
    <div className="w-full h-full ">
      {lstDataMenu.map((itemMenu, index) => (
        <CollapseMemuItem
          key={index}
          listSubMenu={itemMenu?.listSubMenu}
          isCloseMenu={isCloseMenu}
          isActive={indexItemSelected === index ? true : false}
          onClick={() => handleClickItem(index)}
          text={itemMenu.text}
          icon={itemMenu.icon}
          pushTo={itemMenu?.pushTo}
        />
      ))}
    </div>
  );
};

export default MenuSidebar;
