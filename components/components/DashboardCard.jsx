import "../../assets/styles/old-admin.css"

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-primary-white p-6 py-4 rounded-lg borderColor font-graphik dropShadow ">
      <h3 className="text-sm font-medium text-grey-3">{title}</h3>
      <p className="text-2xl mt-2 font-semibold">{value}</p>
    </div>
  )
}

export default DashboardCard
