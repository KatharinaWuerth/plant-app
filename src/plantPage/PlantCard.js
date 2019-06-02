import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import TagList from './PlantTagList'

const StyledCard = styled.section`
  background: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 2px 2px 9px -1px darkgray;
  width: 70%;
  margin: 20px 0;
`

const StyledPlantImage = styled.img`
  width: 100%;
`

const StyledTitle = styled.h3`
  margin-block-end: 0;
  margin-block-start: 0;
`
const StyledCardHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

const StyledTextbox = styled.section`
  padding: 20px;
`
const StyledLine = styled.div`
  background-color: #cbe1c2;
  height: 3px;
  border-radius: 1.5px;
  margin: 10px 0;
`

export default function PlantCard({
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
      <StyledPlantImage src={img} alt={alt} />
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
