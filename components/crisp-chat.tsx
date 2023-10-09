"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("789efa61-d1b6-4c96-bbae-6e2f9cd66708");
  }, []);

  return null;
};
