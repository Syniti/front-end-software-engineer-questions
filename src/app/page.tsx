"use client";

import React, {useMemo} from "react";
import { Card, ICard } from "./component/Card";

export default function Dashboard() {
  const quickAccessCardData: ICard[] = useMemo<ICard[]>(
    () => [
      {
        id: "asjhbcu",
        name: "Email",
        stat: "You have 5 unread emails",
        redirectLink: "/email",
      },
      {
        id: "ckajbskjd",
        name: "Storage",
        stat: "Your storage id almost full",
        redirectLink: "/storage",
      },
      {
        id: "amsnbcuwe",
        name: "Photos",
        stat: "Photos Backup Complete.",
        redirectLink: "/photo",
      },
      {
        id: "amsnbcuwe",
        name: "Subscription",
        stat: "Subscribe to continue",
        redirectLink: "/subscriptions",
      },
    ],
    []
  );
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4 p-0.5">
      {quickAccessCardData.map((stat:ICard) => (
       <Card id={stat.id} name={stat.name} stat={stat.stat} redirectLink={stat.redirectLink} key={stat.id}/>
      ))}
    </dl>
  );
}
