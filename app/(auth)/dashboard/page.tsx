import React from 'react'
import Sidebar from '../components/Sidebar'
import Banner from '../components/Banner'
import DashboardCard from '../components/DashboardCard'

const page = () => {
  return (
    <div className="w-full py-4 px-4 flex flex-col space-y-4">
      <Banner title="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Stock"
          amount={546}
          text="We have 546 items in stock"
        />
        <DashboardCard
          title="Total Sales"
          amount={435}
          text="we have sold 123 items"
        />
        <DashboardCard
          title="Total Orders"
          amount={53}
          text="we have 53 Orders"
        />
        <DashboardCard
          title="Total Swap"
          amount={19}
          text="we have 19 Swap deals"
        />
      </div>
      <div className="bg-white px-4 py-4 rounded-md shadow-xl">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, a
          minus eligendi maiores perspiciatis quisquam error, voluptas facilis
          accusantium culpa quasi assumenda fuga porro soluta fugit placeat.
          Temporibus, excepturi cumque?
        </p>
      </div>
    </div>
  )
}

export default page
