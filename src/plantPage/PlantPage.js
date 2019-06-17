import React from 'react'
import styled from 'styled-components'
import PlantList from './PlantList'
import ListHeader from '../common/ListHeader'
import GridList from '../common/GridList'
import NavButton from '../common/NavButton'
import BookmarkActive from '../img/BookmarkActive.png'
import { FilterAlt } from 'styled-icons/boxicons-regular/'

const StyledBookmarkActive = styled.img`
  width: 50px;
  padding: 10px;
`

const StyledListHeader = styled(ListHeader)`
  z-index: 1;
`

const StyledNavFavButton = styled(NavButton)`
  bottom: 4%;
  right: 5%;
`
const StyledNavFilterButton = styled(NavButton)`
  bottom: 4%;
  left: 5%;
  color: #367860;
  padding: 10px;
`
const StyledDiv = styled.div`
  overflow: scroll;
`
const Search = styled.input`
  position: fixed;
  top: 80px;
  height: 1.7rem;
  width: 100%;
  border-radius: 7px;
  border: solid #79838f 0.7px;
  padding: 5px;
  transition: top 0.6s;
  outline: none !important;
`

export default function PlantPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
  matchInfo,
  onUserInput,
}) {
  let prevScrollpos = 0

  function scrollFunction(event) {
    let currentScrollPos = event.target.scrollTop

    if (prevScrollpos < currentScrollPos) {
      document.querySelector('.searchbar').style.top = '-50px'
    } else {
      document.querySelector('.searchbar').style.top = '76px'
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <GridList>
      <StyledListHeader>Unsere Vorschläge</StyledListHeader>
      <Search className="searchbar" placeholder="Suche" />
      <StyledDiv id="plantlist" onScroll={event => scrollFunction(event)}>
        <PlantList
          plants={plants}
          onBookmark={onBookmark}
          getOptionLabel={getOptionLabel}
          selection={selection}
          matchInfo={matchInfo}
          onUserInput={onUserInput}
        />
      </StyledDiv>
      <StyledNavFilterButton to="/filter">
        <FilterAlt title={'filter'} size={30} />
      </StyledNavFilterButton>
      <StyledNavFavButton to="/favourite">
        <StyledBookmarkActive src={BookmarkActive} />
      </StyledNavFavButton>
    </GridList>
  )
}
