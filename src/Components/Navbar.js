import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg'>
      <NavbarItem title='Trending' params='fetchTrending' />
      <NavbarItem title='Top Rated' params='fetchTopRated' />
    </div>
  )
}

export default Navbar