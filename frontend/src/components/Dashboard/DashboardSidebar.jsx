import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>
      <ul>
        <li className="mb-2"><Link to="/employee-info" className="hover:underline">Employee Info</Link></li>
        <li className="mb-2"><Link to="/appointment" className="hover:underline">Appointment</Link></li>
        <li className="mb-2"><Link to="/evaluation" className="hover:underline">Evaluation</Link></li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
