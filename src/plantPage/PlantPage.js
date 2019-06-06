import React from 'react'
import styled from 'styled-components'
import PlantList from './PlantList'

import FilterIcon from '../img/FilterIcon.png'
import StyledHeader from '../common/StyledHeader'
import GridList from '../common/GridList'
import StyledNavButton from '../common/StyledNavButton'
import BookmarkActive from '../img/BookmarkActive.png'

const StyledFilterIcon = styled.img`
  width: 50px;
  padding: 12px;
`

const StyledBookmarkActive = styled.img`
  width: 50px;
  padding: 10px;
`

const StyledNavFavButton = styled(StyledNavButton)`
  bottom: 4%;
  right: 9%;
`
const StyledNavFilterButton = styled(StyledNavButton)`
  bottom: 4%;
  left: 9%;
`

export default function PlantPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
}) {
  return (
    <GridList>
      <StyledHeader>Unsere Vorschläge</StyledHeader>
      <PlantList
        plants={plants}
        onBookmark={onBookmark}
        getOptionLabel={getOptionLabel}
        selection={selection}
      />
      <StyledNavFilterButton to="/filter">
        <StyledFilterIcon src={FilterIcon} />
      </StyledNavFilterButton>
      <StyledNavFavButton to="/favPlants">
        <StyledBookmarkActive src={BookmarkActive} />
      </StyledNavFavButton>
    </GridList>
  )
}
