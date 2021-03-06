import React from 'react'
import styled from 'styled-components'
import OptionButton from './OptionButton'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

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

function OptionRow({ optionGroup, selection, onOptionSelect }) {
  return (
    <StyledOptionRow>
      {optionGroup.map(option => (
        <OptionButton
          active={selection.includes(option.id)}
          onClick={() => onOptionSelect(option.id)}
          key={option.id}
        >
          {option.label}
        </OptionButton>
      ))}
    </StyledOptionRow>
  )
}

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
      <StyledFilterButton to="/matched">
        Finde deine perfekte Pflanze
      </StyledFilterButton>
    </OptionsGrid>
  )
}

OptionRow.propTypes = {
  optionGroup: PropTypes.arrayOf(PropTypes.object),
  selection: PropTypes.arrayOf(PropTypes.string),
  onOptionSelect: PropTypes.func,
  option: PropTypes.shape({ id: PropTypes.string.isRequired }),
}

ButtonList.propTypes = {
  optionList: PropTypes.arrayOf(PropTypes.object),
  selection: PropTypes.arrayOf(PropTypes.string),
  onOptionSelect: PropTypes.func,
  optionGroup: PropTypes.shape({
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }),
}
