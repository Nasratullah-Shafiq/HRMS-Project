// import React from 'react';
// function Home(){
//     return(
//         <div className = "container" >
//             <h1> Home Page </h1>
//         </div>
//     )
// }

// export default Home;

import React from "react";
import {
  Home,
  Users,
  BarChart3,
  Briefcase,
  Bell,
  Search,
  Settings,
  DollarSign,
  UserPlus,
  Activity,
  TrendingUp,
} from "lucide-react";

function HomePage() {
  const cards = [
    {
      title: "Total Employees",
      value: "1,248",
      icon: <Users size={28} />,
      color: "#4F46E5",
    },
    {
      title: "Revenue",
      value: "$58,240",
      icon: <DollarSign size={28} />,
      color: "#059669",
    },
    {
      title: "New Clients",
      value: "320",
      icon: <UserPlus size={28} />,
      color: "#EA580C",
    },
    {
      title: "Growth",
      value: "+18%",
      icon: <TrendingUp size={28} />,
      color: "#DC2626",
    },
  ];

  const activities = [
    "New employee joined HR department",
    "Project dashboard updated",
    "Monthly report generated",
    "System maintenance completed",
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#F3F4F6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#111827",
          color: "white",
          padding: "25px 20px",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <MenuItem icon={<Home />} title="Home" active />
          <MenuItem icon={<Users />} title="Employees" />
          <MenuItem icon={<BarChart3 />} title="Analytics" />
          <MenuItem icon={<Briefcase />} title="Projects" />
          <MenuItem icon={<Settings />} title="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Navbar */}
        <div
          style={{
            height: "80px",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 30px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#F3F4F6",
              padding: "10px 15px",
              borderRadius: "10px",
              width: "320px",
            }}
          >
            <Search size={18} color="gray" />

            <input
              type="text"
              placeholder="Search..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                marginLeft: "10px",
                width: "100%",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Bell />

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ padding: "30px" }}>
          <h1
            style={{
              fontSize: "32px",
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Welcome Back 👋
          </h1>

          <p style={{ color: "#6B7280", marginBottom: "30px" }}>
            Here is your business dashboard overview.
          </p>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginBottom: "35px",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "18px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#6B7280",
                      marginBottom: "10px",
                      fontSize: "15px",
                    }}
                  >
                    {card.title}
                  </p>

                  <h2
                    style={{
                      fontSize: "28px",
                      color: "#111827",
                    }}
                  >
                    {card.value}
                  </h2>
                </div>

                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "15px",
                    background: card.color,
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {card.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "25px",
            }}
          >
            {/* Analytics */}
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ marginBottom: "20px", color: "#111827" }}>
                Analytics Overview
              </h2>

              <div
                style={{
                  height: "300px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "20px",
                }}
              >
                {[60, 90, 120, 80, 140, 100].map((height, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height: `${height}px`,
                      background:
                        "linear-gradient(to top, #4F46E5, #818CF8)",
                      borderRadius: "12px 12px 0 0",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ marginBottom: "20px", color: "#111827" }}>
                Recent Activity
              </h2>

              {activities.map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "12px",
                      background: "#EEF2FF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#4F46E5",
                    }}
                  >
                    <Activity size={20} />
                  </div>

                  <div>
                    <p style={{ margin: 0, color: "#111827" }}>
                      {activity}
                    </p>

                    <small style={{ color: "#6B7280" }}>
                      2 hours ago
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, title, active }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "14px 18px",
        borderRadius: "12px",
        cursor: "pointer",
        background: active ? "#4F46E5" : "transparent",
      }}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default HomePage;