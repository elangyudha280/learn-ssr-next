"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/configs/next-auth";

export const getSession = async () => {
  return await getServerSession(authOptions);
};
