"use client";
import Link from "next/link";
import bg from "public/bgnew.jpeg";
import { Josefin_Sans } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
const Josefin = Josefin_Sans({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div
      className={"HomePage " + Josefin.className}
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <h1>ElectiveGenie</h1>
      <p>Smart Elective Choices, Powered by AI.</p>
      <a href="/dashboard">
        <button>Dashboard</button>
      </a>
      <button onClick={() => signIn("google")}>Get Started</button>
    </div>
  );
}
