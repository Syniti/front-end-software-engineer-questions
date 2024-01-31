import React, { Fragment } from 'react'
import { IEmail } from '../data/model';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/app/utils/helper';

type ListProps ={
    email:IEmail;
    handleDelete:Function
    selectedPeople:IEmail[]
    toggleEmailSelection:Function
}

export const Email = ({email , handleDelete,selectedPeople,toggleEmailSelection}:ListProps) => {
  return (
    <tr key={email.email} className={selectedPeople.includes(email) ? 'bg-gray-50' : undefined}>
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedPeople.includes(email) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={email.email}
                          checked={selectedPeople.includes(email)}
                          onChange={() => toggleEmailSelection(email)}
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedPeople.includes(email) ? 'text-indigo-600' : 'text-gray-900'
                        )} 
                      >
                        <a href={email.email}>{email.name}</a>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a href={email.email}>{email.title}</a></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a href={email.email}>{email.email}</a></td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <Menu as="div" className="relative">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <EllipsisVerticalIcon
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
              color="red"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                <button
                  onClick={() => handleDelete(email.id)}
                  className={"block px-3 py-1 text-sm leading-6 text-gray-900"}
                >
                  {"Delete"}
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </td>
                    </tr>
  );
}
