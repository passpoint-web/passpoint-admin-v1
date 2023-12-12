"use client";

import { Metric1, Metric2, Metric3, Metric4 } from "@/icons/icon";

const metricData = [
  {
    title: "Registered Merchants",
    icon: Metric1,
    value: "72",
  },
  {
    title: "Bookings made",
    icon: Metric2,
    sym: "%",
    value: "12",
  },
  {
    title: "Transaction volume",
    icon: Metric3,
    value: "₦5.5m",
  },
  {
    title: "Yet to complete KYC",
    icon: Metric4,
    value: "23",
  },
];

const MetricCard = () => {
  return (
    <div className="grid font-graphik grid-cols-fluidMedium gap-6">
      {metricData.map((item, i) => (
        <div
          key={i}
          className="bg-primary-white p-6 flex items-center gap-4 border-[1.5px] borderColor rounded-2xl"
        >
          <item.icon />
          <section>
            <h3 className="text-2xl text-grey-1 font-semibold">{item.value}</h3>
            <p className="text-sm text-grey-3">{item.title}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default MetricCard;
