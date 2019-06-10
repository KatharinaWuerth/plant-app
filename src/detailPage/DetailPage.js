import React from 'react'
import styled from 'styled-components'
import DetailCard from './DetailCard'

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

function getPlantById(id, plants) {
  const newPlants = plants
  const clickedPlant = newPlants.filter(plant => plant.id === id)[0]
  return clickedPlant
}
export default function DetailPage(allParametersObj) {
  const id = allParametersObj.match.params.id
  const { plants, getOptionLabel, selection } = allParametersObj

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
    </StyledDetailGrid>
  )
}
