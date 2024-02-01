'use client'

import { useState } from 'react'
import { FaUser, FaRegListAlt } from 'react-icons/fa'
import { IoHeart } from 'react-icons/io5'
import { GiShoppingCart } from 'react-icons/gi'
import { TiThMenu } from 'react-icons/ti'
import { CgMenuMotion } from 'react-icons/cg'
import { IoMdHome } from 'react-icons/io'
import { CiViewList } from 'react-icons/ci'
import Link from 'next/link'

const Navbar = () => {
  const [open, setIsOpen] = useState(false)
  const links = [
    { id: 1, label: 'Home', link: '/', icon: <IoMdHome /> },
    { id: 2, label: 'Products', link: '/items', icon: <CiViewList /> },
    { id: 3, label: 'Profile', link: '/profile', icon: <FaUser /> },
    { id: 4, label: 'Wishlist', link: '/wishlist', icon: <FaRegListAlt /> },
    { id: 5, label: 'Orders', link: '/myorders', icon: <IoHeart /> },
    // { id: 4, label: 'Cart', link: '/cart', icon:  },
  ]

  return (
    <nav className="w-full md:max-w-7xl flex flex-col space-x-1 mx-auto bg-white relative">
      <div className="w-full px-5 md:px-20 flex items-center justify-between py-4 shadow mx-auto">
        <p className="text-blue-800 uppercase font-extrabold">
          Soft<span className="text-red-700">Tech</span>
        </p>

        <form className="border hidden border-blue-700 rounded-lg lg:flex overflow-hidden">
          <input
            type="text"
            className="border border-blue-600 outline-none rounded-tl-md rounded-bl-md px-2 py-1"
            placeholder="Search"
            required
          />
          <select
            name=""
            id=""
            className="outline-none border border-blue-500 space-x-4"
          >
            <option value="">All Categoryies</option>
            <option value="">Accessories</option>
            <option value="">Laptop</option>
            <option value="">Phones</option>
            <option value="">Speakers</option>
          </select>
          <button className="bg-blue-600 text-white px-6">Search</button>
        </form>

        <ul className="hidden md:flex items-center justify-start space-x-6 outline-none">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="flex flex-col items-center space-y-1 text-slate-400 hover:text-slate-950"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          <Link
            href="/cart"
            className="flex flex-col items-center space-y-1 text-slate-400 hover:text-slate-950"
          >
            <span className="text-2xl">
              <GiShoppingCart />
            </span>
            <span>Cart</span>
          </Link>
        </ul>

        {open ? (
          <CgMenuMotion
            className="block md:hidden text-slate-500 text-lg cursor-pointer h-full"
            onClick={() => setIsOpen(!open)}
          />
        ) : (
          <TiThMenu
            className="block md:hidden text-slate-500 text-lg cursor-pointer h-full"
            onClick={() => setIsOpen(!open)}
          />
        )}
      </div>

      {/* mobile menu to show from the left side with animation */}

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <ul
        className={`w-8/12 absolute z-20 bg-white h-screen backdrop:bg-slate-400 left-0 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {open &&
          links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="flex p-4 text-slate-700 hover:bg-slate-200"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl mr-2">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        <Link
          href="/cart"
          className="flex p-4 text-slate-700 hover:bg-slate-200"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-xl mr-2">
            <GiShoppingCart />
          </span>
          <span>Cart</span>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
