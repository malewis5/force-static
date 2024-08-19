"use server";

import { cookies } from "next/headers";

export const login = () => {
  cookies().set("user-id", "1234");
};

export const logout = () => {
  cookies().delete("user-id");
};

export const getUserId = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("user-id");
  return cookie;
};
