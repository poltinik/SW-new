import React, { useContext } from 'react'
import { SWContext } from '../utils/context'

const NavItem = ({itemTitle}) => {

  const {changePage} = useContext(SWContext);

  return (
    <li onClick={() => changePage(itemTitle)} className="bg-red-color border-black border-2 rounded-md cursor-pointer hover:text-white hover:bg-red-500 px-3 py-2">{itemTitle}</li>
  )
}

export default NavItem