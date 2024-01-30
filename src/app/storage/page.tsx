"use client";
import React, { useMemo } from "react";
import { IStorage } from "./data/model";
import { storageData } from "./data/mockData";
import { StorageList } from "./component/StorageList";

export default function Storage() {
   const allStorage = useMemo<IStorage[]>(() => storageData, []);
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {allStorage.map((data) => (
        <StorageList key={data.id} data={data} />
      ))}
    </div>
  );  
}
