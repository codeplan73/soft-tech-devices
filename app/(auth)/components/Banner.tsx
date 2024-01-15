'use client'

import React, { useState, useEffect } from 'react'

const Banner = ({ title }: { title: string }) => {
  const [currentDate, setCurrentDate] = useState<string>('')
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }

      setCurrentDate(now.toLocaleDateString(undefined, dateOptions))
      setCurrentTime(now.toLocaleTimeString(undefined, timeOptions))
    }

    // Update date and time every second
    const intervalId = setInterval(updateDateTime, 1000)

    // Initial update
    updateDateTime()

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex items-center justify-between">
      <h4 className="text-xl md:text-2xl font-semibold text-slate-500">
        {title}
      </h4>
      <div className="flex items-center justify-start space-x-4 text-slate-500">
        <p className="text-sm">{currentDate}</p>
        <p className="text-sm">{currentTime}</p>
      </div>
    </div>
  )
}

export default Banner
