"use client";
import Ngn from "@/assets/images/ngn.svg";
import CustomSelect from "@/components/forms/CustomSelect";
import Links from "@/components/ui/Links";
import { useState } from "react";

const options = [
  {
    text: "NGN",
    img: Ngn,
  },
  {
    text: "USD",
    img: Ngn,
  },
  {
    text: "GHS",
    img: Ngn,
  },
];

const walletData = [
  {
    title: "Transaction Volume",
    value: "₦1,905,384.00",
    bgColor: "bg-[#009EC4]",
  },
  {
    title: "Total Wallets created",
    value: "28",
    bgColor: "bg-[#7B61FF]",
  },
  {
    title: "Active",
    value: "28",
    bgColor: "bg-[#07B463]",
  },
  {
    title: "Inactive",
    value: "0",
    bgColor: "bg-[#FF3B2D]",
  },
];

const WalletMiniTable = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(options[0]);

  const handleChange = (option) => {
    setSelectedCurrency(option);
    // Now you can do something with the selected option, such as fetching data
    // related to the selected currency or updating other components.
  };

  return (
    <div className="bg-primary-white h-full  borderColor border rounded-2xl p-[24px_24px_46px] font-graphik">
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-grey-1 tracking-[-0.5px] font-medium">
          Wallets
        </h2>
        <div className="relative">
          <CustomSelect
            showImage
            options={options}
            onOptionSelected={handleChange}
            containerClass="w-[129px] max-w-[129px] text-[10px]"
          />
        </div>
      </section>
      <section className="grid gap-8">
        {walletData.map((item, i) => (
          <div key={i} className="flex items-center justify-between ">
            <span className="flex items-center text-[12px] text-randomColor-1">
              <span
                className={`h-3 w-3 ${item.bgColor} rounded-full mr-2`}
              ></span>
              {item.title}
            </span>
            <span className="text-[12px] text-randomColor-1 font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </section>
      <Links
        href="/dashboard/user"
        text="View Wallets Transactions"
        variant="outlinedPrimary"
        size="md"
        className="text-base font-medium mt-10 "
      />
    </div>
  );
};

export default WalletMiniTable;
