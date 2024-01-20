import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'
import Sidebar from '@/app/components/auth/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin & Staff Dashboard',
  description: 'Dashboard || Admin and Staff Section',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="w-full md:max-w-7xl mx-auto flex justify-between bg-slate-100 flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
