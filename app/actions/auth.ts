"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "caremandateai@admin.com" && password === "123Caremandateai#") {
    // Set a cookie for the admin session
    (await cookies()).set("admin_token", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    redirect("/admin");
  }

  return { error: "Invalid email or password" };
}

export async function logout() {
  (await cookies()).delete("admin_token");
  redirect("/login");
}
