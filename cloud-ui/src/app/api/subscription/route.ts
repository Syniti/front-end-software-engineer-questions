import { NextRequest } from "next/server";
import SubscriptionData from "./subscription.json";

export async function GET(_request: NextRequest) {
  console.log("Email GET Request");
  return new Response(JSON.stringify(SubscriptionData), {
    status: 200,
  });
}
