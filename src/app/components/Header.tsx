import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-md"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Family Cable Network</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Admin Panel</span>
        </div>
      </div>
    </header>
  );
};

export default Header;