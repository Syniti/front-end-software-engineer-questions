import { Key } from "react";

export interface Email {
  name: string;
  email: string;
  subject: string;
  phone: string;
  id: Key | null | undefined;
}

export type EmailListResponse = Email[];