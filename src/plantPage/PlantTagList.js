import React from 'react'
import styled from 'styled-components'

const StyledTagList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`

const StyledTag = styled.span`
  border: solid black 0.7px;
  border-radius: 7px;
  padding: 3px;
  margin: 3px;
  font: small;
`

export default function TagList({ tags }) {
  return (
    <StyledTagList>
      {tags.map(tag => (
        <StyledTag key={tag}>{tag}</StyledTag>
      ))}
    </StyledTagList>
  )
}
