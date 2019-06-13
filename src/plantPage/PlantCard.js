import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import TagList from './PlantTagList'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardPlantImage,
  CardTextbox,
  CardTitle,
  CardHeader,
  CardLine,
  Container,
} from '../common/CardComponents'
import { EditAlt } from 'styled-icons/boxicons-regular/'
import Notes from './Notes'

const StyledCard = styled(Card)`
  width: 80%;
`

const LinkContainer = styled(NavLink)``

export function PlantCard({
  plant,
  selection,
  matchInfo,
  onBookmark,
  getOptionLabel,
  onUserInput,
}) {
  const [editMode, setEditMode] = useState(false)

  const { img, alt, title, id, isBookmarked } = plant
  const tags = plant.tagList

  function handleEditMode() {
    setEditMode(!editMode)
  }

  return (
    <StyledCard>
      <LinkContainer to={'/detail/' + id}>
        <CardPlantImage src={img} alt={alt} />
      </LinkContainer>
      <CardTextbox>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Container>
            <EditAlt size={20} onClick={handleEditMode} />
            <Bookmark
              onClick={onBookmark}
              id={id}
              isBookmarked={isBookmarked}
            />
          </Container>
        </CardHeader>
        <CardLine />
        <TagList
          tags={tags}
          getOptionLabel={getOptionLabel}
          selection={selection}
          matchInfo={matchInfo}
        />

        <Notes
          value={plant.userNote}
          onUserInput={onUserInput}
          editMode={editMode}
          plant={plant}
          changeEditMode={handleEditMode}
        />
      </CardTextbox>
    </StyledCard>
  )
}

PlantCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
}
