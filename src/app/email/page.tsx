"use client"

import React, { useState } from 'react'
import { IEmail } from './data/model';
import { emails as allEmails } from './data/mockData';
import { ListItem } from './component/ListItem';

export default function Email() {
  const [emails, setEmails] = useState<IEmail[]>(allEmails);

  const handleDelete = (email:IEmail)=>{
    setEmails(emails.filter( e => e.id !== email.id))
  };
  return (
    <div className="flow-root">
      <span className="text-3xl text-bold">Emails</span>
      <div className="-mx-4 -my-2 mt-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>

                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {emails.map((email: IEmail) => <ListItem key={email.id} email={email} handleDelete={handleDelete}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
