import { CiHome } from "react-icons/ci";
import { FaUser, FaComment, FaRegSun, FaBell } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-pink-900 text-white">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">App Name</div>
      <nav className="flex-grow p-4 space-y-4">
        <a href="#dashboard" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <CiHome className="h-6 w-6" />
          <span>Dashboard</span>
        </a>
        <a href="#profile" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaUser className="h-6 w-6" />
          <span>Profile</span>
        </a>
        <a href="#messages" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaComment className="h-6 w-6" />
          <span>Messages</span>
        </a>
        <a href="#settings" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaRegSun className="h-6 w-6" />
          <span>Settings</span>
        </a>
        <a href="#notifications" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaBell className="h-6 w-6" />
          <span>Notifications</span>
        </a>
        <a href="#search" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaBell className="h-6 w-6" />
          <span>Search</span>
        </a>
        <a href="#help" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaBell className="h-6 w-6" />
          <span>Help</span>
        </a>
        <a href="#analytics" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaBell className="h-6 w-6" />
          <span>Analytics</span>
        </a>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a href="#logout" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
          <FaBell className="h-6 w-6" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
