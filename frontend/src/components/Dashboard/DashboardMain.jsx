import DashboardMenu from "./DashboardMenu";
import DashboardCard from "./DashboardCard";

const DashboardMain = () => {
  const dashboardItems = [
    { name: "Employee Info", path: "/employee-info" },
    { name: "Appointment", path: "/appointment" },
    { name: "Separation", path: "/separation" },
    { name: "Evaluation", path: "/evaluation" },
    { name: "Promotion", path: "/promotion" },
    { name: "Appointment Reports", path: "/appointment-reports" },
    { name: "Rewards", path: "/rewards" },
    { name: "Penalties", path: "/penalties" },
    { name: "Skills and Languages", path: "/skills-languages" },
    { name: "Employee Record", path: "/employee-record" },
    { name: "Search", path: "/search" },
    { name: "General Reports", path: "/general-reports" },
    { name: "Retirement", path: "/retirement" },
    { name: "Retiree Report", path: "/retiree-report" },
    { name: "Analytics", path: "/analytics" },
    { name: "Performance Report", path: "/performance-report" },
    { name: "Education", path: "/education" },
    { name: "Employee General Report", path: "/employee-general-report" },
    { name: "Selection General Report", path: "/selection-general-report" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardMenu items={dashboardItems} />
    </div>
  );
};

export default DashboardMain;
