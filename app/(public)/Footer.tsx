import Link from 'next/link'
import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  const aboutLinks = [
    { label: 'About Us', link: 'about' },
    { label: 'Find store', link: 'findstore' },
    { label: 'Categories', link: 'categories' },
    { label: 'Blog', link: 'blog' },
  ]
  const partnershipLinks = [
    { label: 'About Us', link: 'about' },
    { label: 'Find store', link: 'findstore' },
    { label: 'Categories', link: 'categories' },
    { label: 'Blog', link: 'blog' },
  ]
  const Informations = [
    { label: 'Help Center', link: 'help' },
    { label: 'Money Refund', link: 'findstore' },
    { label: 'Shipping', link: 'shipping' },
    { label: 'Contact Us', link: 'contact' },
  ]
  const forUsers = [
    { label: 'Login', link: 'login' },
    { label: 'Register', link: 'register' },
    { label: 'Settings', link: 'settings' },
    { label: 'My Orders', link: 'orders' },
  ]

  const date = new Date(Date.now()).getFullYear()

  return (
    <footer className="w-full md:max-w-7xl mx-auto flex flex-col">
      <div className="w-full md:max-w-7xl mx-auto px-10 md:px-40 flex flex-col md:flex-row gap-10 py-8 bg-white">
        <div className="flex flex-col items-start gap-1 space w-full md:w-3/12">
          <p className="text-blue-800 uppercase font-extrabold">
            Soft<span className="text-red-700">Tech</span>
          </p>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          </p>
          <div className="flex items-start space-x-2 ">
            <Link href="#" className="">
              <FaFacebookF className="bg-slate-400 text-white hover:bg-blue-700 rounded-full p-1 text-xl" />
            </Link>
            <Link href="#" className="">
              <FaTwitter className="bg-slate-400 text-white rounded-full hover:bg-blue-400 p-1 text-xl" />
            </Link>
            <Link href="#" className="">
              <FaLinkedinIn className="bg-slate-400 text-white rounded-full hover:bg-blue-900 p-1 text-xl" />
            </Link>
            <Link href="#" className="">
              <FaInstagram className="bg-slate-400 text-white rounded-full hover:bg-red-700 p-1 text-xl" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-9/12 grid grid-cols-2 md:grid-cols-4 gap-6 items-center md:items-start justify-between">
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-md">About</h4>
            {aboutLinks.map((about) => (
              <Link
                key={about.link}
                href={about.link}
                className="text-slate-500 text-sm"
              >
                {about.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-md">Partnership</h4>
            {partnershipLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-slate-500 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-md">Information</h4>
            {Informations.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-slate-500 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-md">For Users</h4>
            {forUsers.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-slate-500 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-200 px-10 md:px-20 py-5 text-sm font-semibold text-slate-700 text-center ">
        <span>&copy; {date} E-commmerce</span> powered by{' '}
        <Link href="#" className="">
          Globe-Raven
        </Link>
      </div>
    </footer>
  )
}

export default Footer
