import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardFooter from "./DashboardFooter";

const DashboardWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <div className="flex-1 p-6">{children}</div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardWrapper;
