import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardPlantImage,
  CardTextbox,
  CardTitle,
  CardHeader,
  CardLine,
  Container,
} from '../common/CardComponents'
import Bookmark from '../plantPage/Bookmark'
import TagList from '../plantPage/TagList'
import { getMatchedNum } from '../utils'
import Notes from '../plantPage/Notes'
import { EditAlt } from 'styled-icons/boxicons-regular/'
import PropTypes from 'prop-types'

const StyledDetailCard = styled(Card)`
  width: 90%;
  justify-self: center;
`

const StyledDescriptionHeader = styled.h4``

const StyledDescription = styled.p``

export default function DetailCard({
  plant,
  selection,
  getOptionLabel,
  onUserInput,
  onBookmark,
}) {
  const { img, alt, title, id, isBookmarked, tagList, description } = plant
  const [editMode, setEditMode] = useState(false)

  return (
    <StyledDetailCard plant={plant}>
      <CardPlantImage src={img} alt={alt} />
      <CardTextbox>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Container>
            <EditAlt size={20} onClick={() => setEditMode(!editMode)} />
            <Bookmark
              onClick={onBookmark}
              id={id}
              isBookmarked={isBookmarked}
            />
          </Container>
        </CardHeader>
        <CardLine />
        <TagList
          tags={tagList}
          getOptionLabel={getOptionLabel}
          selection={selection}
          matchInfo={getMatchedNum(plant, selection) + '/' + selection.length}
        />
        <Notes
          value={plant.userNote}
          onUserInput={onUserInput}
          editMode={editMode}
          plant={plant}
          changeEditMode={() => setEditMode(!editMode)}
        />
        <CardLine />
        <StyledDescriptionHeader>Pflegehinweise</StyledDescriptionHeader>
        <StyledDescription> {description}</StyledDescription>
      </CardTextbox>
    </StyledDetailCard>
  )
}

DetailCard.protoTypes = {
  plant: PropTypes.shape({
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onBookmark: PropTypes.func,
    isBookmarked: PropTypes.bool,
    tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
  }),
  getOptionLabel: PropTypes.func,
  selection: PropTypes.arrayOf(PropTypes.string),
}
