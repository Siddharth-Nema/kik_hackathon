"use server";

import { redirect } from "next/navigation";

export async function navigateToDashboard() {
  redirect("/dashboard");
}

export async function navigateToHome() {
  redirect("/");
}
