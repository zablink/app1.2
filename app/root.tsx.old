import * as React from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./tailwind.css";

export function meta() {
  return [{ charSet: "utf-8" }, { title: "RRRP" }, { name: "viewport", content: "width=device-width, initial-scale=1" }];
}

export function links() {
  return [];
}

export default function Root() {
  return (
    <html lang="th">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh bg-white text-gray-900">
        <div className="min-h-dvh flex flex-col">
          <header className="border-b">
            <div className="container mx-auto px-4 py-3 flex items-center gap-4">
              <a href="/" className="text-lg font-bold">RRRP</a>
              <nav className="hidden md:flex gap-4 text-sm">
                <a href="/">Home</a>
                <a href="/dashboard">My Dashboard</a>
                <a href="/profile">Profile</a>
                <a href="/admin">Admin</a>
              </nav>
              <details className="md:hidden ml-auto">
                <summary className="cursor-pointer select-none">เมนู</summary>
                <nav className="mt-2 flex flex-col gap-2 text-sm">
                  <a href="/">Home</a>
                  <a href="/dashboard">My Dashboard</a>
                  <a href="/profile">Profile</a>
                  <a href="/admin">Admin</a>
                </nav>
              </details>
            </div>
          </header>
          <main className="flex-1 container mx-auto px-4 py-6">
            <Outlet />
          </main>
          <footer className="border-t py-6 text-center text-sm text-gray-500">© RRRP</footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
