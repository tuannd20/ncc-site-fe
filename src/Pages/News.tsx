import React from 'react'

import {HeadNcc, Content, Footer} from '../components'

const News: React.FunctionComponent = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className='items-center'>
        <HeadNcc />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default News