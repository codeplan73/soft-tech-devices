import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from '@/app/components/Skeleton'

const IssueFormSkeleton = () => {
  return (
    <Box className="w-full max-w-7xl">
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="10rem" />
    </Box>
  )
}

export default IssueFormSkeleton
