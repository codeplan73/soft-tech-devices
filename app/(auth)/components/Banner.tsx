import React from 'react'

const Banner = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-xl md:text-2xl font-semibold text-slate-500">
        {title}
      </h4>
      <div className="flex items-center justify-start space-x-4 text-slate-500">
        <p className="text-sm">Date</p>
        <p className="text-sm">Time</p>
      </div>
    </div>
  )
}

export default Banner
