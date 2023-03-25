import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

const Header = () => {
  return (
    <div className='bg-white mb-2'>
      <div className='container divide-y'>
        <div className='p-2'>NavBar Here</div>
        <Breadcrumb />
      </div>
    </div>
  )
}

export default Header