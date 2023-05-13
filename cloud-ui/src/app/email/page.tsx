import { createContext } from "react";
import { EmailList } from "../components";
import { EmailListResponse } from "./models";

export default function Email() {
  async function getEmailList(): Promise<EmailListResponse> {
    "use server";

    const emailRequest = await fetch("http://localhost:3000/api/email");
    const response = await emailRequest.json();

    return response;
  }

  return <EmailList getEmailList={getEmailList} />;
}
