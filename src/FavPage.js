import React from 'react'
import styled from 'styled-components'
import ListHeader from './common/ListHeader'
import PlantList from './plantPage/PlantList'
import GridList from './common/GridList'
import NavButton from './common/NavButton'
import BackIcon from './img/BackArrow.png'

const StyledIcon = styled.img`
  width: 50px;
  padding: 10px;
`
const StyledNavBackButton = styled(NavButton)`
  bottom: 4%;
  left: 9%;
`

const StyledDiv = styled.div`
  overflow: scroll;
`

export default function FavPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
}) {
  return (
    <GridList>
      <ListHeader>Deine Auswahl</ListHeader>
      <StyledDiv id="plantlist">
        <PlantList
          plants={plants}
          onBookmark={onBookmark}
          getOptionLabel={getOptionLabel}
          selection={selection}
        />
      </StyledDiv>
      <StyledNavBackButton to="matched">
        <StyledIcon src={BackIcon} />
      </StyledNavBackButton>
    </GridList>
  )
}
