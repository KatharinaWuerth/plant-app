import React from 'react'
import styled from 'styled-components'
import PlantList from './PlantList'
import GlobalStyles from '../misc/GlobalStyles'
import FilterIcon from '../img/FilterIcon.png'
import { NavLink } from 'react-router-dom'

const GridPlantList = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background: linear-gradient(0deg, white 70%, #367860 30%);
  position: relative;
`

const StyledFilterIcon = styled.img`
  width: 50px;
  padding: 12px;
`
const StyledFilterButton = styled(NavLink)`
  display: block;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 4%;
  left: 9%;
  border-radius: 50%;
  background-color: white;
  box-shadow: 2px 2px 9px -1px darkgray;
`

const StyledPlantListHeader = styled.header`
  padding: 20px 60px;
  color: white;
  width: 100%;
  background-color: #367860;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  text-align: center;
`

export default function PlantPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
}) {
  return (
    <GridPlantList>
      <GlobalStyles />
      <StyledPlantListHeader>Unsere Vorschläge</StyledPlantListHeader>
      <PlantList
        plants={plants}
        onBookmark={onBookmark}
        getOptionLabel={getOptionLabel}
        selection={selection}
      />
      <StyledFilterButton to="/filter">
        <StyledFilterIcon src={FilterIcon} />
      </StyledFilterButton>
    </GridPlantList>
  )
}
