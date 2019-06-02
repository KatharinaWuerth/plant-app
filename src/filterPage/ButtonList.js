import React from 'react'
import styled from 'styled-components'
import OptionButton from './OptionButton'
import { NavLink } from 'react-router-dom'

const StyledOptionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const OptionsGrid = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 20px;
  overflow-y: scroll;
`

const StyledFilterButton = styled(NavLink)`
  justify-self: center;
  align-self: center;
  text-decoration: none;
  padding: 15px;
  border-radius: 7px;
  background: white;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin: 15px;
  background-color: #367860;
  color: white;
`
//in options sind hier zwei Elemente drin (not-winter, winter)
function OptionRow({ optionGroup, selection, onOptionSelect }) {
  return (
    <StyledOptionRow>
      {optionGroup.map(option => (
        <OptionButton
          active={selection.includes(option.id)} //legt nur fest, ob es active ist oder nicht
          onClick={() => onOptionSelect(option.id)}
          key={option.id}
        >
          {option.label}
        </OptionButton>
      ))}
    </StyledOptionRow>
  )
}

// in options hier sind 8 Elemente drin
export default function ButtonList({ optionList, selection, onOptionSelect }) {
  return (
    <OptionsGrid>
      {optionList.map(optionGroup => (
        <OptionRow
          key={optionGroup.id}
          optionGroup={optionGroup.options}
          selection={selection}
          onOptionSelect={onOptionSelect}
        />
      ))}
      <StyledFilterButton to="/matchedPlants">
        Find your perfect plant
      </StyledFilterButton>
    </OptionsGrid>
  )
}
