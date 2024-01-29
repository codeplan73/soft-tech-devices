import React from 'react'

const NewsLetter = () => {
  return (
    <form className="flex flex-col gap-1">
      <h4 className="font-bold text-xl">Subscribe on our newsletter</h4>
      <p className="text-slate-500 mb-6">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex space-x-2">
        <input
          type="text"
          className="form-input w-full border border-slate-300 rounded-md p-2 outline-gray-400"
          id="supplierName"
          placeholder="Supplier Name"
        />
        <button className="submit-button bg-blue-500 text-white py-2 px-4 rounded-md font-semibold">
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default NewsLetter
