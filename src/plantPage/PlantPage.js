import React from 'react'
import styled from 'styled-components'
import PlantList from './PlantList'
import Header from '../header/Header'
import GlobalStyles from '../misc/GlobalStyles'
import FilterIcon from '../img/FilterIcon.png'
import { NavLink } from 'react-router-dom'

const GridPlantList = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
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
  bottom: 8%;
  left: 9%;
  border-radius: 50%;
  background-color: white;
  box-shadow: 2px 2px 9px -1px darkgray;
`

export default function PlantPage({ onBookmark, plants }) {
  return (
    <GridPlantList>
      <GlobalStyles />
      <Header />
      <PlantList plants={plants} onBookmark={onBookmark} />
      <StyledFilterButton to="/filter">
        <StyledFilterIcon src={FilterIcon} />
      </StyledFilterButton>
    </GridPlantList>
  )
}

/*
 border-radius: 50%;
  
*/
