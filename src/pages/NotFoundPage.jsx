import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded transition-all duration-300"
      >
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
