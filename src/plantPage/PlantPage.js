import React from 'react'
import styled from 'styled-components'
import PlantList from './PlantList'
import Header from '../header/Header'
import GlobalStyles from '../misc/GlobalStyles'

const GridPlantList = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  background: linear-gradient(0deg, white 70%, #367860 30%);
`

export default function PlantPage({ onBookmark, plants }) {
  return (
    <GridPlantList>
      <GlobalStyles />
      <Header />
      <PlantList plants={plants} onBookmark={onBookmark} />
    </GridPlantList>
  )
}
