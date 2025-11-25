import React from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0 }}>
        <header style={{ padding: "1rem", background: "#eee" }}>
          <Link href="/">Home</Link> | <Link href="/areas">Areas</Link> | <Link href="/persons">Persons</Link> <Link href="/login">login</Link>
           <Link href="/dashboard">Home</Link>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
