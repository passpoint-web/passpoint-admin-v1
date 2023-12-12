import { CgProfile } from "react-icons/cg";

const merchants = [
  {
    name: "Victor  Ogbonna",
    transactionVolume: "₦1,905,384.00",
    totalBookings: 2981,
    statusColor: "text-[#07B463]",
  },
  {
    name: "Annette Black",
    transactionVolume: "₦1,905,384.00",
    totalBookings: 2981,
    statusColor: "text-[#FF3B2D]",
  },
  {
    name: "Esther Howard",
    transactionVolume: "₦1,905,384.00",
    totalBookings: 2981,
    statusColor: "orange",
  },
  {
    name: "Josh Anaba",
    transactionVolume: "₦1,905,384.00",
    totalBookings: 2981,
    statusColor: "orange",
  },
  {
    name: "Lola Joseph",
    transactionVolume: "₦1,905",
    totalBookings: 2981,
    statusColor: "text-[#07B463]",
  },
];

const MerchantRow = ({ merchant }) => (
  <div className="grid grid-cols-3 items-center text-randomColor-2 text-[12px] p-[16px_24px] borderColor">
    <div className="flex items-center space-x-2">
      <span className={`${merchant.statusColor} text-sm`}>●</span>
      <CgProfile className="text-lg" />
      <span>{merchant.name}</span>
    </div>
    <div className="text-left text-grey-1 font-medium">
      {merchant.transactionVolume}
    </div>
    <div className="text-left text-sm">{merchant.totalBookings}</div>
  </div>
);

const TopMerchantsTable = () => {
  return (
    <div className="bg-primary-white borderColor border rounded-2xl pt-6 font-graphik">
      <h2 className="text-xl font-medium tracking-[-0.5px] text-grey-1 mb-4 ml-6">
        Top 5 Merchants
      </h2>
      <div className="">
        <div className="grid grid-cols-3 items-center tracking-[0.6px] text-randomColor-tableHeadText p-[18px_24px] bg-randomColor-tableHead text-[10px] font-semibold shadow-[0px_-1px_0px_0px_#EDF2F7_inset]">
          <span>MERCHANT'S NAME</span>
          <span className="justify-self-start">TRANSACTION VOLUME</span>
          <span className="justify-self-start">TOTAL BOOKINGS MADE</span>
        </div>
        {merchants.map((merchant, index) => (
          <MerchantRow key={index} merchant={merchant} />
        ))}
      </div>
    </div>
  );
};

export default TopMerchantsTable;
