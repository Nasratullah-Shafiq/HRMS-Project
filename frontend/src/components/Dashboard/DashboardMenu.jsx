import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";

const DashboardMenu = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <DashboardCard key={index} name={item.name} path={item.path} />
      ))}
    </div>
  );
};

export default DashboardMenu;
