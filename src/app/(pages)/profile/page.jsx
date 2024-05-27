
import React from 'react';
import ImageUploader from '@/components/Profile/ImageUploader';
import Data from '@/components/Profile/Data';

const Page = () => {
  return (
    <div className="bg-[#151c24] min-h-screen p-4 sm:p-8 gap-10 flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <div className="w-full md:w-auto">
        <ImageUploader />
      </div>
      <div className="w-full md:w-auto">
        <Data />
      </div>
    </div>
  );
};

export default Page;

