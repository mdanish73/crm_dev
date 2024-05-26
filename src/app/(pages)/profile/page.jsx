import React from 'react';
import ImageUploader from '@/components/Profile/ImageUploader';
import Data from '@/components/Profile/Data';
const page = () => {


  return (
    <div className=' bg-[#151c24] min-h-screen gap-10 flex justify-center items-center overflow-hidden'>
  <div className="">
    <ImageUploader />
  </div>
  <div>
    <Data/>
  </div>
</div>
  );
};

export default page;

