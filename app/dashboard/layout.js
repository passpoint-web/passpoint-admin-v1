"use client";
import Header from "@/components/auth/Header";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideBar from "@/components/dashboard/SideBar";
import FullScreenLoader from "@/components/modals/FullScreenLoader";
import { getCredentials, getToken } from "@/services/localService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [savedCredentials, setSavedCredentials] = useState({});

  const checkAuth = async () => {
    const auth = await getToken();
    if (!auth) {
      // setAuthenticated(false);
      push(`/auth/login?fallBackUrl=${window.location.pathname}`);
    } else {
      // setAuthenticated(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    setSavedCredentials(getCredentials());
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <FullScreenLoader />
      </>
    );
  }

  return (
    <div className="h-screen fixed top-0 left-0 w-full flex">
      <aside>
        <SideBar />
      </aside>
      <section className="w-[calc(100vw_-_202px)]">
        <DashboardHeader user={savedCredentials} />
        <main className="w-full h-[calc(100vh_-_80px)] bg-primary-lightBlue p-[28px_24px] overflow-y-auto scrollbar">
          {children}
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
