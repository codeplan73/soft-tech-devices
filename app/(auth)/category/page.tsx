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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-10 overflow-y-scroll bg-white rounded-md shadow-xl">
          <List />
          <AddCategory />
        </div>
      </Container>
    </div>
  )
}

export default page
