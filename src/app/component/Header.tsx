import { Menu, Transition } from '@headlessui/react';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'

export const Header = () => {
  return (
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <div className="relative flex flex-1 items-center">
        <span
          className="ml-4 text-sm leading-6 text-gray-900"
          aria-hidden="true"
        >
          Location :
        </span>
        <span
          className="ml-1 text-sm font-semibold leading-6 text-gray-900"
          aria-hidden="true"
        >
          N.California
        </span>
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />

        {/* Separator */}
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
          aria-hidden="true"
        />

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <Image
              width={40}
              height={40}
              className="rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <span className="hidden lg:flex lg:items-center">
                <div className="flex flex-col">
                  <span
                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                  >
                    Tom Cook
                  </span>
                  <span
                    className="ml-4 text-sm leading-6 text-gray-900"
                    aria-hidden="true"
                  >
                    Syniti Inc
                  </span>
                </div>

                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </div>
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
                {({ active }) => (
                  <Link
                    href={"#"}
                    className={
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    }
                  >
                    {"Profile"}
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={"#"}
                    className={
                      "block px-3 py-1 text-sm leading-6 text-gray-900"}
                  >
                    {"Sign Out"}
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
