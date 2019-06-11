import React from 'react'
import styled from 'styled-components'
import DetailCard from './DetailCard'
import CloseIcon from '../img/CloseIcon.png'

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

const StyledCloseIcon = styled.img`
  width: 50px;
  padding: 13px;
`

const StyledNavCloseButton = styled.button`
  padding: 0;
  top: 4%;
  right: 9%;
  display: grid;
  height: 50px;
  width: 50px;
  position: absolute;
  border-radius: 50%;
  background-color: white;
  box-shadow: 2px 2px 9px -1px darkgray;
`

function getPlantById(id, plants) {
  const newPlants = plants
  const clickedPlant = newPlants.filter(plant => plant.id === id)[0]
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
  } = allParametersObj

  return (
    <StyledDetailGrid>
      <StyledDetailHeader />
      <Container>
        <DetailCard
          plant={getPlantById(id, plants)}
          getOptionLabel={getOptionLabel}
          selection={selection}
        />
      </Container>
      <StyledNavCloseButton onClick={() => onClick(history)}>
        <StyledCloseIcon src={CloseIcon} />
      </StyledNavCloseButton>
    </StyledDetailGrid>
  )
}
