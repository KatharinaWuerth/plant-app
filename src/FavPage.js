import React from 'react'
import styled from 'styled-components'
import StyledHeader from './common/StyledHeader'
import PlantList from './plantPage/PlantList'
import GridList from './common/GridList'
import StyledNavButton from './common/StyledNavButton'
import BackIcon from './img/BackArrow.png'

const StyledIcon = styled.img`
  width: 50px;
  padding: 10px;
`
const StyledNavBackButton = styled(StyledNavButton)`
  bottom: 4%;
  left: 9%;
`
export default function FavPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
}) {
  return (
    <GridList>
      <StyledHeader>Deine Auswahl</StyledHeader>
      <PlantList
        plants={plants}
        onBookmark={onBookmark}
        getOptionLabel={getOptionLabel}
        selection={selection}
      />
      <StyledNavBackButton to="matchedPlants">
        <StyledIcon src={BackIcon} />
      </StyledNavBackButton>
    </GridList>
  )
}
