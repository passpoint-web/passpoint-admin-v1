import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideBar from "@/components/dashboard/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen fixed top-0 left-0 w-full flex">
      <aside>
        <SideBar />
      </aside>
      <section className="w-[calc(100vw_-_202px)]">
        <DashboardHeader />
        <main className="w-full h-[calc(100vh_-_80px)] bg-primary-lightBlue p-[28px_24px] overflow-y-auto scrollbar">
          {children}
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
