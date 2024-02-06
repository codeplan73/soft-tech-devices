import Link from 'next/link'
import { IoMenuSharp } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className="w-full mx-auto px-5 py-5 flex items-center space-x-2 fixed top-0 left-0 right-0 z-30 bg-white">
      <ul className="flex items-center justify-between md:justify-end w-full space-x-4">
        {/* <IoMenuSharp className="block cursor-pointer text-2xl" /> */}
        <IoMenuSharp className="block md:hidden cursor-pointer text-2xl" />
        <Link href="/dashboard">User</Link>
      </ul>
    </nav>
  )
}

export default Navbar
