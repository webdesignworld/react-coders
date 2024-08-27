import React from 'react';
import avatar1 from '../assets/images/avatar1.jpg'; // Assuming you want the same avatar for all coders
import coders from '../coders.json';

const CoderCards = () => {
  return (
    <div>
   
      {coders.map((coder, index) => (
        <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-between p-4 mb-4">
          {/* Left Side: Avatar and Name */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={avatar1} // You might want to replace this with coder-specific avatars
              alt="Avatar"
            />
            <div className="ml-4">
              <h2 className="text-gray-800 text-lg font-semibold">{coder.first_name} {coder.last_name}</h2>
              <p className="text-gray-600 text-sm">{coder.username}</p>
            </div>
          </div>

          {/* Right Side: Score */}
          <div className="flex items-center">
            <span className="text-gray-500 font-medium text-lg">Score:</span>
            <span className="ml-2 text-blue-600 font-bold text-xl">{coder.score}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoderCards;

