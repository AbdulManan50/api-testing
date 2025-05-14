import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-9xl font-bold text-purple-600">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/home"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 