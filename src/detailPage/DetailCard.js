import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CardPlantImage,
  CardTextbox,
  CardTitle,
  CardHeader,
  CardLine,
} from '../common/CardComponents'
import Bookmark from '../plantPage/Bookmark'
import TagList from '../plantPage/PlantTagList'
import { getMatchedNum } from '../utils'

const StyledDetailCard = styled(Card)`
  width: 90%;

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
      <CardPlantImage src={img} alt={alt} />
      <CardTextbox>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Bookmark onClick={onBookmark} id={id} isBookmarked={isBookmarked} />
        </CardHeader>
        <CardLine />
        <TagList
          tags={tagList}
          getOptionLabel={getOptionLabel}
          selection={selection}
          matchInfo={getMatchedNum(plant, selection) + '/' + selection.length}
        />
        <CardLine />
        <StyledDescriptionHeader>Pflegehinweise</StyledDescriptionHeader>
        <StyledDescription> {description}</StyledDescription>
      </CardTextbox>
    </StyledDetailCard>
  )
}
