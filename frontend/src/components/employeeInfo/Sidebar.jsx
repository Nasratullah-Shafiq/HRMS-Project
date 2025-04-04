import { Link } from "react-router-dom";

const Sidebar = () => {
  const sections = [
    "Personal Information",
    "Travel",
    "Property",
    "Person Guarantee",
    "Cash Guarantee",
    "Education",
    "Experience",
    "Skills and Certification",
    "Language",
    "Publication",
    "Documents",
    "Health",
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-4">Sections</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index} className="mb-2">
            <Link to={`/employee-info/${section.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
