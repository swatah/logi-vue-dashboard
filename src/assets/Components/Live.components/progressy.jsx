import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
      <div
        className="bg-green-400 h-6 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-gray-700">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
