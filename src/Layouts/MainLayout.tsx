import { Outlet } from "react-router-dom";
import { SideBar } from "../Components/SideBar";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
