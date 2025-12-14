"use client";

import { MailIcon } from "lucide-react";

import { decodeEmail } from "@/utils/string";

import { IntroItem } from "./intro_item";

export function EmailItem({ email }: { email: string }) {
  const emailDecoded = decodeEmail(email);

  return (
    <IntroItem
      icon={MailIcon}
      content={emailDecoded}
      href={`mailto:${emailDecoded}`}
    />
  );
}
