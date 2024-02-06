import React from 'react'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Theme, ThemePanel } from '@radix-ui/themes'
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
        <Theme appearance="light" grayColor="sage">
          <div className="w-full md:max-w-7xl mx-auto">
            <Sidebar />
            <main className="w-full md:max-w-7xl mx-auto flex justify-between bg-slate-100 flex-1 overflow-x-hidden overflow-y-auto md:pl-48 mt-16 z-10">
              <Navbar />
              {children}
            </main>
          </div>
        </Theme>
      </body>
    </html>
  )
}
