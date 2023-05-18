import React from 'react'

import {HeadNcc, Content, Footer} from '../components'

const News: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen">
      <div className='w-[1280px]'>
        <HeadNcc />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default News