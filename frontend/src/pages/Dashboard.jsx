import { Link } from "react-router-dom";
// import "./Dashboard.css"; 

const Dashboard = () => {
  const menuItems = [
    { name: "Employee Info", path: "/employee-info" },
    { name: "Appointment", path: "/appointment" },
    { name: "Separation", path: "/separation" },
    { name: "Evaluation", path: "/evaluation" },
    { name: "Promotion", path: "/promotion" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="p-4 bg-blue-500 text-white rounded-lg">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
