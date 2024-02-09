'use client'
import React, { useState } from 'react';

interface Email {
  id: string;
  title: string;
  timestamp: string;
}

interface UserEmailsProps {
  initialUserEmails: Email[];
}

const Emails: React.FC<UserEmailsProps> = ({ initialUserEmails }) => {
  const [userEmails, setUserEmails] = useState<Email[]>(initialUserEmails);

  const handleDelete = (emailId: string) => {
    const updatedEmails = userEmails.filter((email) => email.id !== emailId);
    setUserEmails(updatedEmails);
  };

  return (
    <div className="bg-white text-black rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Last Email</h2>
      {userEmails.slice(-5).map((email) => (
        <div key={email.id} className="flex justify-between items-center border-b-2 py-2">
          <div>
            <div className="font-bold">{email.title}</div>
            <div className="text-sm">{email.timestamp}</div>
          </div>
          <button
            className="bg-black text-white px-3 py-1 rounded"
            onClick={() => handleDelete(email.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Emails;
