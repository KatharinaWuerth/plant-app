import React from 'react'
import styled from 'styled-components'

const StyledTagList = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const StyledTag = styled.span`
  border: solid black 0.7px;
  border-radius: 7px;
  padding: 3px;
  margin: 3px;
  font-size: small;
  background: ${props => (props.active ? '#CBE1C2' : 'white')};
`

export default function TagList({ tags, getOptionLabel, selection }) {
  return (
    <StyledTagList>
      {tags.map(tag => (
        <StyledTag key={tag} active={selection.includes(tag)}>
          {getOptionLabel(tag)}
        </StyledTag>
      ))}
    </StyledTagList>
  )
}
