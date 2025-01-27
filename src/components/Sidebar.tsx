const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-auto border-r border-gray-200 bg-white">
      <div className="w-[240px] py-8">
        <nav className="space-y-1 px-4">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span>Orders</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span>Addresses</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span>Account details</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <span>Logout</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 