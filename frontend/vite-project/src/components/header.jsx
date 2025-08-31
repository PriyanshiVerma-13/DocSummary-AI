function Header({onHistoryClick}) {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Left side - Logo + App name */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <h1 className="font-bold text-xl">DocSummary AI</h1>
      </div>

      {/* Middle - Nav */}
      {/* <nav className="flex space-x-6">
        <button onClick={onHistoryClick} className="hover:text-green-600">History</button>
        <a href="#settings" className="hover:text-green-600">Settings</a>
      </nav> */}

      {/* Right side - Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell (emoji fallback) */}
        <button className="text-xl hover:text-green-600">🔔</button>
        {/* User Profile (circle placeholder) */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-white">U</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

