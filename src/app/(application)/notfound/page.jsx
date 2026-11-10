import Errors from '@/components/sstErrorPage/Errors'
import React from 'react'

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
}

const page = () => {
  return (
    <div>
       <Errors />
    </div>
  )
}

export default page
