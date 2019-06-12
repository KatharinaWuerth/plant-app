import React from 'react'
import styled from 'styled-components'
import PlantList from './PlantList'
import FilterIcon from '../img/FilterIcon.png'
import ListHeader from '../common/ListHeader'
import GridList from '../common/GridList'
import NavButton from '../common/NavButton'
import BookmarkActive from '../img/BookmarkActive.png'

const StyledFilterIcon = styled.img`
  width: 50px;
  padding: 12px;
`

const StyledBookmarkActive = styled.img`
  width: 50px;
  padding: 10px;
`

const StyledNavFavButton = styled(NavButton)`
  bottom: 4%;
  right: 9%;
`
const StyledNavFilterButton = styled(NavButton)`
  bottom: 4%;
  left: 9%;
`
const StyledDiv = styled.div`
  overflow: scroll;
`

export default function PlantPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
}) {
  return (
    <GridList>
      <ListHeader>Unsere Vorschläge</ListHeader>
      <StyledDiv id="plantlist">
        <PlantList
          plants={plants}
          onBookmark={onBookmark}
          getOptionLabel={getOptionLabel}
          selection={selection}
        />
      </StyledDiv>
      <StyledNavFilterButton to="/filter">
        <StyledFilterIcon src={FilterIcon} />
      </StyledNavFilterButton>
      <StyledNavFavButton to="/favourite">
        <StyledBookmarkActive src={BookmarkActive} />
      </StyledNavFavButton>
    </GridList>
  )
}
