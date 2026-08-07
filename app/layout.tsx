import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DineFlow — Restaurant Management SaaS",
  description: "One dashboard for menus, tables, reservations, orders and the kitchen pass.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}