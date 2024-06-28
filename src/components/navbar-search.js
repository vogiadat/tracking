import React from 'react'
import SearchInput from './SearchInput'
import { handleSubmit } from '@/app/server'

const NavbarSearch = () => {
  return <SearchInput handleSubmit={handleSubmit} />
}

export default NavbarSearch
