import React from 'react'
import styled from 'styled-components'
import {
  StyledPlantImage,
  StyledTextbox,
  StyledTitle,
  StyledCardHeader,
  StyledLine,
} from '../plantPage/PlantCard'
import Bookmark from '../plantPage/Bookmark'
import TagList from '../plantPage/PlantTagList'

const StyledDetailCard = styled.section`
  width: 90%;
  border-radius: 0 0 7px 7px;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin: 20px 0;
  justify-self: center;
`

const StyledDescriptionHeader = styled.h4``

const StyledDescription = styled.p``

export default function DetailCard({ plant, getOptionLabel, selection }) {
  const {
    img,
    alt,
    title,
    id,
    onBookmark,
    isBookmarked,
    tagList,
    description,
  } = plant

  return (
    <StyledDetailCard plant={plant}>
      <StyledPlantImage src={img} alt={alt} />
      <StyledTextbox>
        <StyledCardHeader>
          <StyledTitle>{title}</StyledTitle>
          <Bookmark onClick={onBookmark} id={id} isBookmarked={isBookmarked} />
        </StyledCardHeader>
        <StyledLine />
        <TagList
          tags={tagList}
          getOptionLabel={getOptionLabel}
          selection={selection}
        />
        <StyledLine />
        <StyledDescriptionHeader>Pflegehinweise</StyledDescriptionHeader>
        <StyledDescription> {description}</StyledDescription>
      </StyledTextbox>
    </StyledDetailCard>
  )
}
