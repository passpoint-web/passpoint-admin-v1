"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import CustomSelect from "@/components/forms/CustomSelect";
// import { metrics } from "@/services/restService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Legend,
  Title
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 10,
          family: "GraphikRegular",
        },
        color: "#7E8494",
      },
    },
    y: {
      grid: {
        lineType: "dash",
        color: "#F2F4F6",
      },
      ticks: {
        font: {
          size: 10,
          family: "var(--font-graphik)",
        },
        color: "#7E8494",
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const datasets = {
  Flights: {
    ServicesBooked: [
      120, 150, 180, 90, 210, 240, 200, 250, 300, 400, 500, 450, 350, 480, 200,
      490,
    ],
    RegisteredMerchant: [80, 130, 100, 190, 220, 170, 140, 210],
    RegisteredEnterprise: [60, 90, 110, 120, 200, 190, 220, 160],
  },
  Hotels: {
    ServicesBooked: [100, 110, 150, 130, 170, 180, 160, 190],
    RegisteredMerchant: [70, 100, 130, 160, 180, 150, 120, 140],
    RegisteredEnterprise: [50, 80, 100, 140, 160, 170, 150, 130],
  },
  Travel: {
    ServicesBooked: [90, 120, 140, 110, 180, 200, 170, 210],
    RegisteredMerchant: [60, 110, 90, 150, 190, 160, 130, 180],
    RegisteredEnterprise: [40, 70, 120, 130, 150, 140, 110, 160],
  },
};

export function HomeCharts() {
  const [selectedOption, setSelectedOption] = useState("Flights");
  const [activeCategory, setActiveCategory] = useState("ServicesBooked");
  //   const dataValues = chartData?.growthList
  //     ? Object.values(chartData.growthList)
  //     : [];

  // Event handler for the select element
  const handleOptionSelected = (option) => {
    setSelectedOption(option.text);
  };

  const data = {
    labels: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Services Booked",
        data: datasets[selectedOption][activeCategory],
        backgroundColor: [
          "#FC95D9",
          "#F8E49C",
          "#95D9E9",
          "#CDC4FF",
          "#A8C5DA",
          "#F2B68B",
          "#F8E49C",
          "#FC95D9",
          "#F2B68B",
          "#95D9E9",
        ],
        borderColor: "transparent",
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const tabItems = [
    { label: "Services Booked", key: "ServicesBooked" },
    { label: "Registered Merchant", key: "RegisteredMerchant" },
    { label: "Registered Enterprise", key: "RegisteredEnterprise" },
  ];
  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  const selectOptions = [
    { text: "Flights" }, // Replace with your image paths
    { text: "Hotels" },
    { text: "Travel" },
  ];

  //   useEffect(() => {
  //     getMetrics();
  //   }, []);

  return (
    <div className="p-[24px_24px_58px] rounded-2xl border borderColor">
      <section className="flex justify-between items-center mb-6">
        <div className="flex item-center gap-6">
          {tabItems.map((item) => (
            <button
              key={item.key}
              className={`font-graphik text-sm text-grey-3 pb-1 outline-none ${
                activeCategory === item.key
                  ? "text-primary-300 font-medium border-b-2 border-b-primary-300"
                  : ""
              }`}
              onClick={() => changeCategory(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <CustomSelect
            options={selectOptions}
            onOptionSelected={handleOptionSelected}
            containerClass="w-[129px] max-w-[129px]"
          />
        </div>
      </section>
      <div>
        <Bar options={options} height={370} data={data} />
      </div>
    </div>
  );
}
