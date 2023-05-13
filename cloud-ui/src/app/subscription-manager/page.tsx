import { SubscriptionManager } from "../components";
import { SubscriptionListResponse } from "./model";

export default function SubscriptionManagerPage() {
  async function getSubscriptionList(): Promise<SubscriptionListResponse> {
    "use server";

    const emailRequest = await fetch("http://localhost:3000/api/subscription", {
      next: {
        revalidate: 10
      }
    });

    const response = await emailRequest.json();

    return response;
  }

  return <SubscriptionManager getSubscriptionList={getSubscriptionList} />;
}
