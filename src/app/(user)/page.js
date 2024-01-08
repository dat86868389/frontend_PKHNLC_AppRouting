import UserFacilities from "@/components/user/UserFacilities";
import UserInfoImportant from "@/components/user/UserInfoImportant";
import UserMenuBody from "@/components/user/UserMenuBody";
import UserSwiper from "@/components/user/UserSwiper";
import dynamic from "next/dynamic";

const UserAboutUs = dynamic(() => import("@/components/user/UserAboutUs"), {
  ssr: false,
});

export const metadata = {
  title: "Phòng Khám Hà Nội Lào Cai",
  description: "Phòng khám Hà Nội Lào Cai",
};

export default function HomePage() {
  return (
    <>
      <div className="pb-48">
        <UserSwiper />
        <UserInfoImportant />
        <UserMenuBody />
        <UserAboutUs />
        <UserFacilities />
      </div>
    </>
  );
}
