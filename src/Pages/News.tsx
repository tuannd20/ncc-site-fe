import React from 'react'

import {HeadNcc, Content} from '../components'

const News: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen">
      <div className='items-center'>
        <HeadNcc />
        <Content />
      </div>
    </div>
  )
}

export default News