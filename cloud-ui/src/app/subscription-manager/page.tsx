import { SubscriptionManager } from "../components";
import { SubscriptionListResponse } from "./model";

export default function SubscriptionManagerPage() {
  async function getSubscriptionList(): Promise<SubscriptionListResponse> {
    "use server";

    const subscriptionRequest = await fetch(
      "http://localhost:3000/api/subscription",
      {
        cache: "reload",
      }
    );

    const response = await subscriptionRequest.json();

    return response;
  }

  return <SubscriptionManager getSubscriptionList={getSubscriptionList} />;
}
