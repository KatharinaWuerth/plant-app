import React from 'react'
import styled from 'styled-components'
import ListHeader from './common/ListHeader'
import PlantList from './plantPage/PlantList'
import GridList from './common/GridList'
import NavButton from './common/NavButton'
import PropTypes from 'prop-types'

import { ArrowBack } from 'styled-icons/boxicons-regular/'

const StyledNavBackButton = styled(NavButton)`
  bottom: 4%;
  left: 5%;
  color: #367860;
  padding: 10px;
`

const StyledListHeader = styled(ListHeader)`
  background-color: #f0bb77;
`

const StyledGridList = styled(GridList)`
  background: linear-gradient(0deg, white 70%, #f0bb77 30%);
`

const StyledDiv = styled.div`
  overflow: scroll;
`

export default function FavPage({
  onBookmark,
  plants,
  getOptionLabel,
  selection,
  matchInfo,
  onUserInput,
}) {
  return (
    <StyledGridList>
      <StyledListHeader>Deine Auswahl</StyledListHeader>
      <StyledDiv id="plantlist">
        <PlantList
          plants={plants}
          onBookmark={onBookmark}
          getOptionLabel={getOptionLabel}
          selection={selection}
          onUserInput={onUserInput}
        />
      </StyledDiv>
      <StyledNavBackButton to="matched">
        <ArrowBack title={'back'} size={30} />
      </StyledNavBackButton>
    </StyledGridList>
  )
}

FavPage.propTpyes = {
  onBookmark: PropTypes.func,
  plants: PropTypes.object,
  getOptionLabel: PropTypes.func,
  selection: PropTypes.arrayOf(PropTypes.string),
}
