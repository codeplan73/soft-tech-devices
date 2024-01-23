import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'
import Sidebar from '@/app/components/auth/Sidebar'
import Navbar from '../components/auth/Navbar'

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
        <Sidebar />
        <div className="flex flex-col relative gap-4 overflow-hidden">
          <Navbar />
          <main className="w-full md:max-w-7xl md:pl-48 mx-auto flex justify-between bg-slate-100 flex-1 overflow-x-hidden overflow-y-auto mt-16 z-10 py-2 pr-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
