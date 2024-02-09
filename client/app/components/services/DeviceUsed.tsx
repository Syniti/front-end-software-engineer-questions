import React from 'react';
import { FaMobileAlt, FaLaptop } from 'react-icons/fa';

interface Device {
  id: string;
  name: string;
  type: string;
}

interface DevicesUsedProps {
  devices: Device[];
}

const DevicesUsed: React.FC<DevicesUsedProps> = ({ devices }) => {
  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mobile':
        return <FaMobileAlt />;
      case 'laptop':
        return <FaLaptop />;
      // Add more cases for other types of devices
      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-black rounded-lg  w-[60%]  h-[14rem]">
      <h2 className="text-2xl font-bold mb-4">Devices Used</h2>
      <ul>
        {devices.map((device) => (
          <li key={device.id} className="flex justify-between items-center border-b-2 py-2">
            <div className="flex items-center">
              {getDeviceIcon(device.type)}
              <div className="ml-2">
                <div className="font-bold">{device.name}</div>
                <div className="text-sm">{device.type}</div>
              </div>
            </div>
            {/* Add any actions or additional information here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevicesUsed;
