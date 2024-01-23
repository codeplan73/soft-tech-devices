import Link from 'next/link'
import React from 'react'

const links = [
  { id: 1, label: 'Mobile Phone', link: 'phone' },
  { id: 2, label: 'Cloth & Wear', link: 'phone' },
  { id: 3, label: 'Computer & Tech', link: 'phone' },
  { id: 4, label: 'Tools, Equipment', link: 'phone' },
  { id: 5, label: 'Sport & Outdoors', link: 'phone' },
  { id: 6, label: 'More Category', link: 'phone' },
]

const HeroSection = () => {
  return (
    <div className="w-full md:max-w-7xl mx-auto selection:px bg-white flex justify-start md:space-x-2 drop-shadow-lg p-2 md:p-2">
      <ul className="hidden md:flex flex-col space-y-2 w-56">
        {links.map((link) => (
          <Link
            key={link.id}
            href="#"
            className="hover:bg-blue-100 px-2 py-1 rounded-lg"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div
        className="w-full bg-no-repeat bg-cover h-[40vh] bg-center flex flex-col gap-2 items-start pt-10  pl-16"
        style={{ backgroundImage: "url('/img/hero.png')" }}
      >
        <h4 className="text-2xl font-semibold line-clamp-1">Latest trending</h4>
        <h2 className="text-4xl font-bold">Electronics items</h2>
        <button className="bg-white px-4 py-2 text-sm rounded-md">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HeroSection
