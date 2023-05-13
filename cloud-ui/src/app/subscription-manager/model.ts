import { Key } from "react";

export interface ISubscription {
  name: string;
  daysLeft: string;
  startDate: string;
  purchase: string;
  id: Key | null | undefined;
}

export type SubscriptionListResponse = ISubscription[];
