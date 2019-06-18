import React from 'react'
import ButtonList from './ButtonList'
import styled from 'styled-components'
import ListHeader from '../common/ListHeader'
import PropTypes from 'prop-types'

const GridFilterPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

export default function FilterPage({ optionList, selection, onOptionSelect }) {
  return (
    <GridFilterPage>
      <ListHeader>Was sind deine Wünsche und Voraussetzungen?</ListHeader>
      <ButtonList
        optionList={optionList}
        onOptionSelect={onOptionSelect}
        selection={selection}
      />
    </GridFilterPage>
  )
}

FilterPage.propTypes = {
  optionList: PropTypes.arrayOf(PropTypes.object),
  selection: PropTypes.arrayOf(PropTypes.string),
  onOptionSelect: PropTypes.func,
}
