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
    <StyledOptionButtonList>
      {optionList.map(option => (
        <OptionButton value={option} />
      ))}
    </StyledOptionButtonList>
  )
}
