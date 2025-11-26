// src/app/page.tsx - Simple landing page with navigation
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Family Cable Network
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your cable network operations efficiently
        </p>
        <Link 
          href="/dashboard"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
        >
          Go to Dashboard
        </Link>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">Add Areas</h3>
            <p className="text-gray-600 text-sm mt-2">Manage service areas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">Manage Persons</h3>
            <p className="text-gray-600 text-sm mt-2">Handle customer records</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">View Reports</h3>
            <p className="text-gray-600 text-sm mt-2">Analytics and insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}