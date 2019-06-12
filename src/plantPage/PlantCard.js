import React from 'react'
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
} from '../common/CardComponents'

const StyledCard = styled(Card)`
  width: 70%;
`

const Container = styled(NavLink)``

export function PlantCard({
  img,
  alt,
  title,
  id,
  onBookmark,
  isBookmarked,
  tags,
  getOptionLabel,
  selection,
  matchInfo,
}) {
  return (
    <StyledCard>
      <Container to={'/detail/' + id}>
        <CardPlantImage src={img} alt={alt} />
      </Container>
      <CardTextbox>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Bookmark onClick={onBookmark} id={id} isBookmarked={isBookmarked} />
        </CardHeader>
        <CardLine />
        <TagList
          tags={tags}
          getOptionLabel={getOptionLabel}
          selection={selection}
          matchInfo={matchInfo}
        />
      </CardTextbox>
    </StyledCard>
  )
}

PlantCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
}
