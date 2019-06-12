import React from 'react'
import styled from 'styled-components'
import ListHeader from './common/ListHeader'
import PlantList from './plantPage/PlantList'
import GridList from './common/GridList'
import NavButton from './common/NavButton'

import { ArrowBack } from 'styled-icons/boxicons-regular/'

const StyledNavBackButton = styled(NavButton)`
  bottom: 4%;
  left: 9%;
  color: #367860;
  padding: 10px;
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
        <ArrowBack title={'back'} size={30} />
      </StyledNavBackButton>
    </GridList>
  )
}
