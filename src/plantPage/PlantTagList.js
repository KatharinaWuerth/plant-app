import React from 'react'
import styled from 'styled-components'

const StyledTagList = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const StyledTag = styled.span`
  border: solid black 0.4px;
  border-radius: 7px;
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
