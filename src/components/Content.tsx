import React from 'react'

function Content() {
  return (
    <div className='px-36'>
      <div className="grid-cols-1">
        <div className="bg-contentBg h-48 mt-16">
          <h3 className='font-sans font-medium text-[26px] text-center'>Lorem ipsum dolor sit asmet?</h3>
          <div className='px-36 mt-4'>
            <p className="font-sans text-center text-[18px] text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex grid-rows-3 justify-between'>
            <div className="bg-orange-300" style={{ height: '420px', width: '500px' }}>
              <h2 className='font-sans font-medium text-[26px]'>Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="bg-orange-300" style={{ height: '420px', width: '500px' }}>
              <h2 className='font-sans font-medium text-[26px]'>Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="bg-orange-300" style={{ height: '420px', width: '500px' }}>
              <h2 className='font-sans font-medium text-[26px]'>Lorem ipsum dolor sit amet</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content