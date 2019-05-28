import React from 'react'
import styled from 'styled-components'
import OptionButton from './OptionButton'

const StyledOptionButtonList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 20px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

const StyledFilterButton = styled.button`
  padding: 15px;
  border-radius: 7px;
  background: white;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin: 15px;
  grid-column: span 2;
  background-color: #367860;
  color: white;
`

let optionList = [
  'Wohnungspflanze',
  'Gartenpflanze',
  'heller Raum',
  'dunkler Raum',
  'pflegeleicht',
  'grüner Daumen',
  'große Pflanze',
  'kleine Pflanze',
  'schmale Pflanze',
  'ausladende Pflanze',
  'tierfreundlich',
  'ungenießbar',
  'hohe Luftfeuchtigkeit',
  'niedrige Luftfeuchtigkeit',
  'temperaturempfindlich',
  'frostbeständig',
  'allergikerfreundlich',
  'allergen',
]

export default function ButtonList() {
  return (
    <div>
      <StyledOptionButtonList>
        {optionList.map(option => (
          <OptionButton value={option} />
        ))}
        <StyledFilterButton>Find your perfect plant</StyledFilterButton>
      </StyledOptionButtonList>
    </div>
  )
}
