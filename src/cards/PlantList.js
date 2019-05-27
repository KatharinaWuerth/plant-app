import React from 'react'
import PlantCard from './PlantCard'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPlantList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

export default function PlantList({ plants, onBookmark }) {
  return (
    <StyledPlantList>
      {plants.map(plant => (
        <PlantCard key={plant.title} {...plant} onBookmark={onBookmark} />
      ))}
    </StyledPlantList>
  )
}

PlantList.propTypes = {
  cards: PropTypes.array,
}
