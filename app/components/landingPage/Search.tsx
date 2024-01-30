import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <form className="flex w-full border border-slate-400  rounded-lg lg:hidden overflow-hidden items-center bg-white px-2">
      <CiSearch className="text-lg bg-white font-bold" />

      <input
        type="text"
        className="outline-none placeholder:font-bold px-2 py-1 w-full"
        placeholder="Search"
        required
      />

      {/* <button className="bg-blue-600 text-white px-6">Search</button> */}
    </form>
  )
}

export default Search
