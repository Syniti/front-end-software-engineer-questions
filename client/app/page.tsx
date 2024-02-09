import React from 'react'
import Emails from './components/services/Emails';
import UserStorage from './components/services/UserStorage';
import PhotoLibrary from './components/services/PhotoLibrary'
import SubscriptionManager from './components/services/SubscriptionManager';
import DevicesUsed from './components/services/DeviceUsed';
import UserProfile from './components/UserProfile';

export default function Home(){

  const userEmails = [
    {
      id: '1',
      title: 'Sample Email 1',
      timestamp: '2022-03-01 10:00:00',
    },
    {
      id: '2',
      title: 'Sample Email 2',
      timestamp: '2022-03-01 10:00:00',
    },
    {
      id: '3',
      title: 'Sample Email 3',
      timestamp: '2022-03-01 10:00:00',
    },
    {
      id: '4',
      title: 'Sample Email 4',
      timestamp: '2022-03-01 10:00:00',
    },
    {
      id: '5',
      title: 'Sample Email 5',
      timestamp: '2022-03-01 10:00:00',
    },
    // Add more emails as needed
  ];

  const photos = [
    'https://ik.imagekit.io/tvfucug8t/315944295_683489136672980_8046188745263207622_n_1.png?updatedAt=1678715474291',
    'https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940',
    'https://ik.imagekit.io/tvfucug8t/313401932_672173041137923_522549174449123500_n_1.png?updatedAt=1678715228859',
    // Add more photo URLs as needed
  ];
  
  
  const devices = [
    {
      id: '1',
      name: 'Device 1',
      type: 'Mobile',
    },
    {
      id: '2',
      name: 'Device 2',
      type: 'Laptop',
    },
    // Add more devices as needed
  ];
  
  const username = 'JohnDoe';
  const tenant = 'Company ABC';
  const location = 'Home';
  const profilePhotoUrl = 'https://ik.imagekit.io/tvfucug8t/Screenshot%202024-02-09%20at%2011.39.43%E2%80%AFAM.png?updatedAt=1707458996832';
  
  return (
    <div>
     
      {/* <UserDetails/> */}
      {/* <Applications/> */}
      {/* <Emails/> */}
      <UserProfile username={username} tenant={tenant} location={location} profilePhotoUrl={profilePhotoUrl} />
      <Emails initialUserEmails={userEmails} />
      <div className='flex items-center justify-between px-[2]'>
      <DevicesUsed devices={devices} />

      <UserStorage usedStorage={98} totalStorage={125} />
      
      </div>
      
      <PhotoLibrary photos={photos} />
      <SubscriptionManager/>
      
    </div>
  )
}
