import React from 'react'
import styled from 'styled-components'
import OptionButton from './OptionButton'
import { optionList } from '../app/App'
import { NavLink } from 'react-router-dom'

const StyledOptionButtonList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 20px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  overflow-y: scroll;
`

const StyledFilterButton = styled(NavLink)`
  justify-self: center;
  text-decoration: none;
  padding: 15px;
  border-radius: 7px;
  background: white;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin: 15px;
  grid-column: span 2;
  background-color: #367860;
  color: white;
`

export default function ButtonList() {
  return (
    <StyledOptionButtonList>
      {optionList.map(option => (
        <OptionButton value={option} />
      ))}
      <StyledFilterButton to="/matchedPlants">
        Find your perfect plant
      </StyledFilterButton>
    </StyledOptionButtonList>
  )
}
