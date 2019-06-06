import React from 'react'
import ButtonList from './ButtonList'

import styled from 'styled-components'
import StyledHeader from '../common/StyledHeader'

const GridFilterPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

export default function FilterPage({ optionList, selection, onOptionSelect }) {
  return (
    <GridFilterPage>
      <StyledHeader>Was sind deine Wünsche und Voraussetzungen?</StyledHeader>
      <ButtonList
        optionList={optionList}
        onOptionSelect={onOptionSelect}
        selection={selection}
      />
    </GridFilterPage>
  )
}
