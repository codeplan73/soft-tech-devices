import React from 'react'
interface Props {
  title: string
  amount: number
  text: string
}

const DashboardCard = ({ title, amount, text }: Props) => {
  return (
    <div className="flex items-center justify-between max-w-xs bg-white px-4 py-2 hover:shadow-xl drop-shadow-sm">
      <div className="flex flex-col items-start space-y-1">
        <h4 className="text-xs text-slate-500">{title}</h4>
        <h4 className="text-xl font-semibold">${amount}</h4>
        <h4 className="text-xs text-slate-500">{text}</h4>
      </div>
      <div>map</div>
    </div>
  )
}

export default DashboardCard
