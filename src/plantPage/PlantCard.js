import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import TagList from './PlantTagList'
import { NavLink } from 'react-router-dom'

const StyledCard = styled.section`
  background: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 2px 2px 9px -1px darkgray;
  width: 70%;
  margin: 20px 0;
`

export const StyledPlantImage = styled.img`
  width: 100%;
`

export const StyledTitle = styled.h3`
  margin-block-end: 0;
  margin-block-start: 0;
`
export const StyledCardHeader = styled.header`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

export const StyledTextbox = styled.section`
  padding: 20px;
`
export const StyledLine = styled.div`
  background-color: #cbe1c2;
  height: 3px;
  border-radius: 1.5px;
  margin: 10px 0;
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
}) {
  return (
    <StyledCard>
      <Container to={'/detailPage/' + id}>
        <StyledPlantImage src={img} alt={alt} />
      </Container>
      <StyledTextbox>
        <StyledCardHeader>
          <StyledTitle>{title}</StyledTitle>
          <Bookmark onClick={onBookmark} id={id} isBookmarked={isBookmarked} />
        </StyledCardHeader>
        <StyledLine />
        <TagList
          tags={tags}
          getOptionLabel={getOptionLabel}
          selection={selection}
        />
      </StyledTextbox>
    </StyledCard>
  )
}

PlantCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
}
