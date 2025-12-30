import React from 'react'
import AllCollection from '../components/AllCollection'
import Subscribe from '../components/Subscribe'

const Collection = () => {
  return (
    <div className="flex flex-col gap-24">
      <AllCollection />
      <Subscribe />
    </div>
  )
}

export default Collection
