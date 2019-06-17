import React, { useState, useEffect, useRef } from 'react'
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
  width: 100%;
  background: red;
  transition: top 0.6s;
`

export default function PlantPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
  matchInfo,
  onUserInput,
}) {
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current.scrollTop = 300
  }, [])

  return (
    <GridList>
      <ListHeader>Unsere Vorschläge</ListHeader>
      <StyledDiv id="plantlist" ref={scrollRef}>
        <Search />
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
