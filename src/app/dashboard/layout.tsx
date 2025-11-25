"use client";

import Link from "next/link";


export default function DashboardLayout({ children }: any) {
  return (
    <div className="dashboard-container">
      
      {/* Top Navigation */}
      <header className="dashboard-topbar">
        <Link href="/dashboard">Entry Menu</Link>
        <Link href="/areas">Edit Menu</Link>
        <Link href="/persons">Setup Menu</Link>
        <Link href="/reports">Report Menu</Link>
        <Link href="/logout" className="exit-btn">Exit</Link>
      </header>

      <div className="dashboard-content">
        
        {/* Left Sidebar */}
        <aside className="dashboard-sidebar">
          <Link href="/connection">Connection</Link>
          <Link href="/cash-entry">Cash Entry</Link>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {children}
        </main>

      </div>
    </div>
  );
}
