import React from 'react'
import { Container } from '@radix-ui/themes'

import Banner from '../components/Banner'
import AddCategory from './_component/AddCategory'
import List from './_component/List'

const page = async () => {
  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4">
      <Banner title="Category Page" />

      <Container>
        <div className="flex flex-col md:flex-row items-center md:justify-start gap-6 px-4 py-4 overflow-y-scroll bg-white rounded-md shadow-xl">
          <List />
          <AddCategory />
        </div>
      </Container>
    </div>
  )
}

export default page
