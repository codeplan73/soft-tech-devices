import React from 'react'
import Sidebar from '../components/Sidebar'
import Banner from '../components/Banner'
import DashboardCard from '../components/DashboardCard'

const page = () => {
  return (
    <div className="w-full py-4 px-4 flex flex-col space-y-4">
      <Banner title="Dashboard" />
      <div>
        <DashboardCard
          title="Dashboard"
          amount={20.43}
          text="we have sold 123 items"
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
