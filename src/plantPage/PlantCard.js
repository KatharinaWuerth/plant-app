import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import TagList from './TagList'
import { Link } from 'react-router-dom'
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

const LinkContainer = styled(Link)``

export function PlantCard({
  plant,
  selection,
  matchInfo,
  onBookmark,
  getOptionLabel,
  onUserInput,
}) {
  const [editMode, setEditMode] = useState(false)

  const { img, alt, title, _id, isBookmarked } = plant
  const tags = plant.tagList

  return (
    <StyledCard>
      <LinkContainer to={`/detail/${_id}`}>
        <CardPlantImage src={img} alt={alt} />
      </LinkContainer>
      <CardTextbox>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Container>
            <EditAlt
              title={'edit'}
              size={20}
              onClick={() => setEditMode(!editMode)}
            />
            <Bookmark
              onClick={onBookmark}
              id={_id}
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
          changeEditMode={() => setEditMode(!editMode)}
        />
      </CardTextbox>
    </StyledCard>
  )
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    tagList: PropTypes.arrayOf(PropTypes.string),
    userNote: PropTypes.string,
  }),
  selection: PropTypes.arrayOf(PropTypes.string),
  matchInfo: PropTypes.string,
  onBookmark: PropTypes.func.isRequired,
  getOptionLabel: PropTypes.func,
  onUserInput: PropTypes.func,
  editMode: PropTypes.bool,
}
