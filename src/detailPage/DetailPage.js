import React from 'react'
import styled from 'styled-components'
import DetailCard from './DetailCard'
import { Close } from 'styled-icons/material/'
import PropTypes from 'prop-types'

const StyledDetailGrid = styled.div`
  display: grid;
  grid-template-rows: 20px auto;
  height: 100vh;
  overflow: hidden;
`

const StyledDetailHeader = styled.header`
  background: #367860;
`
const Container = styled.div`
  display: grid;
  overflow-y: scroll;
`

const StyledNavCloseButton = styled.button`
  top: 4%;
  right: 5%;
  color: #367860;
  padding: 10px;
  display: block;
  height: 50px;
  width: 50px;
  position: fixed;
  border-radius: 50%;
  background-color: white;
  box-shadow: 2px 2px 9px -1px darkgray;
`

function getPlantById(id, plants) {
  const newPlants = plants
  const clickedPlant = newPlants.filter(plant => plant._id === id)[0]
  return clickedPlant
}
export default function DetailPage(allParametersObj) {
  const id = allParametersObj.match.params.id
  const {
    plants,
    getOptionLabel,
    selection,
    onClick,
    history,
    onUserInput,
    onBookmark,
  } = allParametersObj
  return (
    <StyledDetailGrid>
      <StyledDetailHeader />
      <Container>
        <DetailCard
          plant={getPlantById(id, plants)}
          getOptionLabel={getOptionLabel}
          selection={selection}
          onUserInput={onUserInput}
          onBookmark={onBookmark}
        />
      </Container>
      <StyledNavCloseButton onClick={() => onClick(history)}>
        <Close name={'close'} size={30} />
      </StyledNavCloseButton>
    </StyledDetailGrid>
  )
}

DetailPage.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.object),
  getOptionLabel: PropTypes.func,
  selection: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  history: PropTypes.object,
}
