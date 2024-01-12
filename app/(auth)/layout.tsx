import React from 'react'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './../globals.css'
import Sidebar from './components/Sidebar'

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
        <main className="w-full md:max-w-7xl mx-auto flex justify-between bg-slate-100">
          <Sidebar />
          <div className="w-full md:w-10/12 p-4">{children}</div>
        </main>
      </body>
    </html>
  )
}
