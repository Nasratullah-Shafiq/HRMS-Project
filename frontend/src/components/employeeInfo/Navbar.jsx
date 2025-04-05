import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownItems = ["Country", "Province", "District", "Village", "University"];

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Employee Information</h1>
      <div className="relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="bg-gray-700 p-2 rounded">
          Select Category
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black shadow-lg p-2">
            {dropdownItems.map((item, index) => (
              <p key={index} className="hover:bg-gray-200 p-2 cursor-pointer">{item}</p>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
