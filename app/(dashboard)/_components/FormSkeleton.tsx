import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from '@/app/components/Skeleton'

const IssueFormSkeleton = () => {
  return (
    <div className="w-full max-w-7xl">
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="10rem" />
    </div>
  )
}

export default IssueFormSkeleton
