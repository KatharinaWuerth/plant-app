import React from 'react'
import { PlantCard } from './PlantCard'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPlantList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

export default function PlantList({
  plants,
  onBookmark,
  getOptionLabel,
  selection,
}) {
  return (
    <StyledPlantList>
      {plants.map(plant => (
        <PlantCard
          to="detailPlant"
          key={plant.id}
          {...plant}
          getOptionLabel={getOptionLabel}
          tags={plant.tagList}
          onBookmark={onBookmark}
          selection={selection}
        />
      ))}
    </StyledPlantList>
  )
}

PlantList.propTypes = {
  cards: PropTypes.array,
}
