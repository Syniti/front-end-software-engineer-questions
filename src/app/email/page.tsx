"use client"

import React, { useEffect, useState } from 'react'
import { IEmail } from './data/model';
import { emails as allEmails } from './data/mockData';
import { Email } from './component/Email';

export default function EmailList() {
  const [emails, setEmails] = useState<IEmail[]>(allEmails);
  const [selectedPeople, setSelectedPeople] = useState<IEmail[]>([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < emails.length;
    setIndeterminate(isIndeterminate);
    setSelectAllChecked(selectedPeople.length === emails.length && emails.length > 0);
  }, [selectedPeople, emails]);

  const toggleAll = () => {
    if (selectAllChecked || indeterminate) {
      setSelectedPeople([]);
      setSelectAllChecked(false);
    } else {
      setSelectedPeople([...emails]);
      setSelectAllChecked(true);
    }
  }

  const handleAllDelete = () => {
    setEmails(emails.filter((e) => !selectedPeople.includes(e)));
    setSelectedPeople([]);
    setSelectAllChecked(false); 
  };

  const handleDelete = (id:string) => {
    setEmails(emails.filter((e) => e.id !== id));
  };

  const toggleEmailSelection =(email: IEmail) => {
    const newSelectedPeople = selectedPeople.includes(email)
      ? selectedPeople.filter((p) => p !== email)
      : [...selectedPeople, email];
    setSelectedPeople(newSelectedPeople);
    setSelectAllChecked(newSelectedPeople.length === emails.length && emails.length > 0);
  }

  return (
    <div className="flow-root">
      <span className="text-3xl text-bold">Emails</span>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedPeople.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    onClick={handleAllDelete}
                  >
                    Delete
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        checked={selectAllChecked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Subject
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {emails.map((email:IEmail) => (
                    <Email key={email.id} email={email} handleDelete={handleDelete} selectedPeople={selectedPeople} toggleEmailSelection={toggleEmailSelection}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


