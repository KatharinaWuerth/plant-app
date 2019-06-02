import React from 'react'
import ButtonList from './ButtonList'
import GlobalStyles from '../misc/GlobalStyles'
import styled from 'styled-components'

const GridFilterPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const StyledFilterHeader = styled.header`
  padding: 20px 60px;
  color: white;
  width: 100%;
  background-color: #367860;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  text-align: center;
`

export default function FilterPage({ optionList, selection, onOptionSelect }) {
  return (
    <GridFilterPage>
      <GlobalStyles />
      <StyledFilterHeader>
        What matches your lifestyle and expectations?
      </StyledFilterHeader>
      <ButtonList
        optionList={optionList}
        onOptionSelect={onOptionSelect}
        selection={selection}
        key={'filterOptions'}
      />
    </GridFilterPage>
  )
}
