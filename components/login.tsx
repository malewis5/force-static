"use client";

import { login } from "../lib/auth";

export default function Login() {
  return <button onClick={() => login()}>Login</button>;
}
