import React from 'react'

const SelectText = () => {
  return (
    <div className="flex flex-col space-y-2 w-full md:flex-1">
      <label
        htmlFor="category"
        id="category"
        className="text-sm text-slate-600"
      >
        Category
      </label>
      <select
        className="border border-slate-300 focus:outline-blue-400 rounded-xl p-2"
        id="category"
        autoComplete="on"
      >
        <option value="">Select Category</option>
        <option value="phone">Phone</option>
        <option value="laptop">Laptop</option>
        <option value="speaker">Speaker</option>
      </select>
    </div>
  )
}

export default SelectText
