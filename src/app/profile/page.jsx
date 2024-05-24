import React from 'react';
import ImageUploader from '@/components/Profile/ImageUploader';
import Data from '@/components/Profile/Data';
const page = () => {


  return (
    <div className='bg-[#202D36] min-h-screen'>
      <div>
        <ImageUploader />
      </div>
      <div>
        <Data/>
      </div>
    </div>
  );
};

export default page;

