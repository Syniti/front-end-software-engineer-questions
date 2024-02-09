import React from 'react';

interface UserStorageProps {
  usedStorage: number;
  totalStorage: number;
}

const UserStorage: React.FC<UserStorageProps> = ({ usedStorage, totalStorage }) => {
  const percentage = Math.round((usedStorage / totalStorage) * 100);

  return (
    <div className='flex flex-col items-center justify-center h-auto md:h-[14rem] w-[12rem] md:w-[14rem] border-2 border-slate-500 rounded-lg p-4 bg-slate-700'>
      <div className='text-white text-2xl font-bold mb-4'>Storage</div>
      <div className='text-4xl font-bold text-white mb-4'>{usedStorage} GB</div>
      <div className='relative w-full h-2 bg-white rounded-full mb-4'>
        <div className='absolute left-0 top-0 h-full bg-gray-500 rounded-full' style={{ width: `${percentage}%` }}></div>
      </div>
      <div className='flex items-center text-white text-sm'>{usedStorage} GB / {totalStorage} GB</div>
    </div>
  );
};

export default UserStorage;
