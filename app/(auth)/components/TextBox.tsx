import React from 'react'

interface Props {
  name: string
  id: string
  label: string
  type: string
}

const TextBox = ({ name, id, label, type }: Props) => {
  return (
    <div className="flex flex-col space-y-2 w-full md:flex-1">
      <label htmlFor={name} id={id} className="text-sm text-slate-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required
        name={name}
        className="border border-slate-300 focus:outline-blue-400 rounded-xl p-2"
        autoComplete="on"
      />
    </div>
  )
}

export default TextBox
