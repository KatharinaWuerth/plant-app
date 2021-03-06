import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavButton = styled(NavLink)`
  display: block;
  height: 50px;
  width: 50px;
  position: fixed;
  border-radius: 50%;
  background-color: white;
  box-shadow: 2px 2px 9px -1px darkgray;
`

export default NavButton
