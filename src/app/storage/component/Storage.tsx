import React from 'react'
import { IStorage } from '../data/model';

export const Storage = ({data}:{data:IStorage}) => {
  return (
    <div
      className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-600 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44`}
    >
      <p className="flex-none text-3xl font-bold tracking-tight text-white">
        {((data.used / data.total) * 100).toFixed()}% Full
      </p>
      <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
        <p className="text-lg font-semibold tracking-tight text-white">
          {data.name}
        </p>
        <p className="mt-2 text-base leading-7 text-gray-400">
          Total : {data.total}GB
        </p>
        <p className="mt-2 text-base leading-7 text-gray-400">
          Used : {data.used}GB
        </p>
        <p className="mt-2 text-base leading-7 text-gray-400">
          Remaining : {data.total - data.used}GB
        </p>
      </div>
    </div>
  );
}
