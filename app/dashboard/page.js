"use client";
import { HomeCharts } from "@/components/dashboard/home/HomeCharts";
import MetricCard from "@/components/dashboard/home/MetricCard";
import TopMerchantsTable from "@/components/dashboard/home/TopMerchantsTable";
import WalletMiniTable from "@/components/dashboard/home/WalletMiniTable";
import ChangePasswordModal from "@/components/dashboard/newUserPasswordFlow/ChangePasswordModal";
import SuccessfulPassword from "@/components/dashboard/newUserPasswordFlow/SuccessfulPassword";
import HomeTitle from "@/components/ui/homeTitle";
import { getCredentials } from "@/services/localService";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [modal, setModal] = useState(null);
  const checkPassword = getCredentials();
  console.log(checkPassword);

  useEffect(() => {
    if (checkPassword && checkPassword.passwordChanged === false) {
      setModal("change-password");
    }
  }, []);

  return (
    <>
      <div>
        <HomeTitle
          title="Dasahboard"
          subtitle="All informations on Passpoints activities"
        />
        <div className="w-full bg-primary-white p-6 mt-6">
          <MetricCard />
          <section className="mt-6 grid grid-cols-fluidLarge gap-6">
            <WalletMiniTable />
            <TopMerchantsTable />
          </section>
          <section className="mt-6">
            <HomeCharts />
          </section>
        </div>
      </div>
      {modal === "change-password" && (
        <ChangePasswordModal setModal={setModal} />
      )}
      {modal === "password-success" && (
        <SuccessfulPassword setModal={setModal} />
      )}
    </>
  );
};

export default Dashboard;
