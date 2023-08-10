import React from 'react'
import { Link } from "react-router-dom";
import {navigationItems} from "../config"

navigationItems.sidebar.push({
  text: "Profile",
  to: "/profile",
  name: "Profile"
});

function Sidebar() {
  return (
    <div  className='w-48 min-h-screen bg-sideBarBg grid-cols-1'>
      {navigationItems.sidebar.map((item) => (
							<Link
								key={item.text}
								to={item.to}
								className={
									location.pathname.includes(item.to) ? "sidebar_active" : ""
								}>
                  <div className="h-12 outline outline-2 outline-white cursor-pointer">
                    <h3 className='font-sans font-medium text-[18px] text-textPrimary text-center'>{item.name}</h3>
                  </div>
							</Link>
						))}
    </div>
  )
}

export default Sidebar