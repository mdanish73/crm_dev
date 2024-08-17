// components/Profile.js
"use client"
import { useState, useContext } from 'react';
import { SuperadminContext } from '@/Context/superadmin/Superadmin';

const Profile = () => {
  const [profilePic, setProfilePic] = useState('/default-profile.png');
  const [imageUploaded, setImageUploaded] = useState(false);
  const { data } = useContext(SuperadminContext);
  

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
        setImageUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className='bg-[#212B35] rounded-lg py-20 px-16'>
      <div className="flex flex-col gap-5 items-center text-white">
        <div className="relative mb-4">
          <img src={profilePic} alt="Profile Image" className="rounded-full w-32 h-32 object-cover" />
          <div>
            <label className={` ${imageUploaded ? 'bg-blue-500' : 'bg-green-500'} rounded-[5px] w-20 h-7 flex justify-center mt-4 ml-6 items-center cursor-pointer`}>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              <span className="text-white text-sm leading-none">{imageUploaded ? "Edit" : 'Upload'}</span>
            </label>
          </div>
          <div className="text-center mt-2">
            <h1 className='text-lg font-semibold'>{data.fullname}</h1>
          </div>
          <div>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
