"use client";

import { useRouter } from "next/navigation";

export type ICard  = {
  id:string
  name:string
  redirectLink: string; 
  stat: string;
}

const Card = ({
  name,
  stat,
  redirectLink,
}: ICard) => {
  const router = useRouter();
  const onCardClick = () => {
      router.push(redirectLink);
  };

  return (
    <div
      onClick={onCardClick}
      className="cursor-pointer flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
    >
      <dt className="text-sm font-medium leading-6 text-gray-500">
        {name}
      </dt>
      <dd className="w-full flex-none text-l font-medium leading-10 tracking-tight text-gray-900">
        {stat}
      </dd>
    </div>
  );
};

export { Card };
