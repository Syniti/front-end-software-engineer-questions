import React from 'react';

interface UserProfileProps {
  username: string;
  tenant: string;
  location: string;
  profilePhotoUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, tenant, location, profilePhotoUrl }) => {
  return (
    <div className="flex items-center justify-center flex-col  h-[40vh] bg-white-600 ">
      <img src={profilePhotoUrl} alt="Profile Photo" className="w-[8rem] h-[8rem] rounded-full mr-4" />
      <div>
        <h1 className="text-xl font-bold">Welcome, {username}!</h1>
        <p>Tenant: {tenant}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default UserProfile;
