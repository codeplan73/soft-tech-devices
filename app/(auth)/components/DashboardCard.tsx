import React from 'react'
interface Props {
  title: string
  amount: number
  text: string
}

const DashboardCard = ({ title, amount, text }: Props) => {
  return (
    <div className="flex items-center justify-between max-w-xs bg-white p-4">
      <div className="flex flex-col items-start space-y-1">
        <h4 className="text-xs text-slate-500">{title}</h4>
        <h4 className="text-2xl font-semibold">${amount}</h4>
        <h4 className="text-xs text-slate-500">{text}</h4>
      </div>
      <div>map</div>
    </div>
  )
}

export default DashboardCard
