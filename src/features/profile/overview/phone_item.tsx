"use client";

import { PhoneIcon } from "lucide-react";

import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import { IntroItem } from "./intro_item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);

  return (
    <IntroItem
      icon={PhoneIcon}
      content={formatPhoneNumber(phoneNumberDecoded)}
      href={`tel:${phoneNumberDecoded}`}
    />
  );
}
