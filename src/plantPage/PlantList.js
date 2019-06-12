import React from 'react'
import { PlantCard } from './PlantCard'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getMatchedNum } from '../utils'

const StyledPlantList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
          key={plant.id}
          {...plant}
          getOptionLabel={getOptionLabel}
          tags={plant.tagList}
          onBookmark={onBookmark}
          selection={selection}
          matchInfo={getMatchedNum(plant, selection) + '/' + selection.length}
        />
      ))}
    </StyledPlantList>
  )
}

PlantList.propTypes = {
  cards: PropTypes.array,
}
