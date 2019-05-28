import React from 'react'
import ButtonList from './ButtonList'
import Header from '../header/Header'
import GlobalStyles from '../misc/GlobalStyles'
import styled from 'styled-components'

const GridFilterPage = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
`

export default function FilterPage() {
  return (
    <GridFilterPage>
      <GlobalStyles />
      <Header />
      <ButtonList />
    </GridFilterPage>
  )
}
