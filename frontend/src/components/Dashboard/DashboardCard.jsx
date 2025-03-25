import { Link } from "react-router-dom";

const DashboardCard = ({ name, path }) => {
  return (
    <Link to={path} className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
      <h3 className="text-lg font-semibold">{name}</h3>
    </Link>
  );
};

export default DashboardCard;
