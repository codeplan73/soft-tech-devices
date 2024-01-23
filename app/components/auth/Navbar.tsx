import Link from 'next/link'
import { IoMenuSharp } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className="w-full md:max-w-7xl items-center px-5 py-5 bg-white flex space-x-2 fixed top-0 left-0 right-0 z-30">
      <IoMenuSharp className="block md:hidden cursor-pointer text-2xl" />
      <ul className="flex items-center justify-between w-full">
        <Link href="/dashboard">Logo</Link>
        <Link href="/dashboard">User</Link>
      </ul>
    </nav>
  )
}

export default Navbar
