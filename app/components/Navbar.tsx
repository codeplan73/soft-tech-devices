import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoHeart } from 'react-icons/io5'
import { FaRegListAlt } from 'react-icons/fa'
import { GiShoppingCart } from 'react-icons/gi'
import Link from 'next/link'

const Navbar = () => {
  const links = [
    { id: 1, label: 'Profile', link: '/profile', icon: <FaUser /> },
    { id: 2, label: 'Wishlist', link: '/wishlist', icon: <FaRegListAlt /> },
    { id: 3, label: 'Orders', link: '/orders', icon: <IoHeart /> },
    { id: 4, label: 'Cart', link: '/cart', icon: <GiShoppingCart /> },
  ]

  return (
    <nav className="w-full md:max-w-7xl flex flex-col space-x-1 mx-auto bg-white">
      <div className="w-full px-10 md:px-20 flex items-center justify-between py-4 shadow mx-auto">
        <p className="text-blue-800 uppercase font-extrabold">
          Soft<span className="text-red-700">Tech</span>
        </p>

        <form className="border border-blue-700 rounded-lg flex overflow-hidden">
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

        <ul className="flex items-center justify-start space-x-6 outline-none">
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
        </ul>
      </div>
      <div></div>
    </nav>
  )
}

export default Navbar
