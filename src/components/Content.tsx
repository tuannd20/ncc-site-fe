import React from 'react'

import { cssIcon, htmlIcon, urlIcon } from "../assets";

function Content() {
  return (
    <div className='px-24'>
      <div className="grid-cols-1">
        <div className="bg-contentBg h-42 mt-6">
          <h3 className='font-sans font-medium text-[18px] text-center'>Lorem ipsum dolor sit asmet?</h3>
          <div className='px-16 mt-4'>
            <p className="font-sans text-center text-[14px] text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex grid-rows-3 grid-flow-col gap-4 justify-between'>
            <div style={{ height: '260px', width: '500px' }}>
              <div>
                <h2 className='font-sans font-medium text-[18px]'>Lorem ipsum dolor sit amet</h2>
              </div>
              <div>
                <div className='float-left'>
                  <img src={cssIcon} alt="" />
                </div>
                <p className="font-sans text-[14px] text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
              </div>
            </div>
            <div style={{ height: '260px', width: '500px' }}>
              <div>
                <h2 className='font-sans font-medium text-[18px]'>Lorem ipsum dolor sit amet</h2>
              </div>
              <div>
                <div className='float-left'>
                  <img src={htmlIcon} alt="" />
                </div>
                <p className="font-sans text-[14px] text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
              </div>
            </div>
            <div style={{ height: '260px', width: '500px' }}>
              <div>
                <h2 className='font-sans font-medium text-[18px]'>Lorem ipsum dolor sit amet</h2>
              </div>
              <div>
                <div className='float-left'>
                  <img src={urlIcon} alt="" />
                </div>
                <p className="font-sans text-[14px] text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content