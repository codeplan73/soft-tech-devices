import Link from 'next/link'
import React from 'react'
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import { FaSignal } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import { GrTransaction } from 'react-icons/gr'
import { PiShoppingBagOpenBold } from 'react-icons/pi'
import { TbUsers } from 'react-icons/tb'
import { RiSettings5Line } from 'react-icons/ri'
import { MdOutlineCategory } from 'react-icons/md'

const Sidebar = () => {
  const links = [
    {
      id: 1,
      label: 'Dashboard',
      link: 'dashboard',
      icon: <LuLayoutDashboard />,
    },
    {
      id: 2,
      label: 'Statistics',
      link: 'statistics',
      icon: <FaSignal />,
    },
    {
      id: 3,
      label: 'Payment',
      link: 'payment',
      icon: <BiDollar />,
    },
    {
      id: 4,
      label: 'Transaction',
      link: 'transaction',
      icon: <GrTransaction />,
    },
    {
      id: 5,
      label: 'Products',
      link: 'products',
      icon: <PiShoppingBagOpenBold />,
    },
    {
      id: 5,
      label: 'Category',
      link: 'category',
      icon: <MdOutlineCategory />,
    },
    {
      id: 7,
      label: 'Customer',
      link: 'customer',
      icon: <TbUsers />,
    },
  ]

  return (
    <aside className="hidden h-full md:flex md:w-48 md:flex-col md:fixed md:inset-y-0 z-[80] bg-white">
      {/* <aside className="hidden md:flex flex-col w-2/12 h-screen justify-between shadow-xl bg-white px-4 py-4"> */}
      <div className="flex flex-col space-y-4">
        <ul className="flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="flex items-center space-x-3 hover:bg-blue-700 py-2 px-2 rounded-xl hover:text-white text-slate-700 hover:shadow-lg hover:drop-shadow-lg"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center space-x-3 hover:text-white hover:bg-blue-700 py-2 px-2 rounded-xl text-slate-900 hover:shadow-lg hover:drop-shadow-lg w-full"
        >
          <span>
            <RiSettings5Line />
          </span>
          <span>Settings</span>
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center space-x-3 hover:text-white hover:bg-blue-700 py-2 px-2 rounded-xl text-slate-900 hover:shadow-lg hover:drop-shadow-lg w-full"
        >
          <span>
            <LuLogOut />
          </span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
