import React from 'react';

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = 'جاري التحميل...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-4">
      <div className="w-12 h-12 rounded-full border-4 border-[#4CAF50] border-t-transparent animate-spin mb-4"></div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default Loading;
