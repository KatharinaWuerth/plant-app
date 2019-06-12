import React from 'react'
import styled from 'styled-components'

const StyledTagList = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const StyledTag = styled.span`
  border: solid #367860 0.7px;
  border-radius: 7px;
  padding: 3px;
  margin: 3px;
  font-size: 0.85rem;
  background: ${props => (props.active ? '#CBE1C2' : 'white')};
  @media screen and (min-width: 600px) {
    font-size: 1.7rem;
  }
`

const StyledMatchInfo = styled.h4`
  margin-top: 0;
  margin-bottom: 5px;
  color: #367860;
  width: 100%;
`

export default function TagList({
  tags,
  getOptionLabel,
  selection,
  matchInfo,
}) {
  return (
    <StyledTagList>
      <StyledMatchInfo>Übereinstimmung: {matchInfo} </StyledMatchInfo>
      {tags.map(tag => (
        <StyledTag key={tag} active={selection.includes(tag)}>
          {getOptionLabel(tag)}
        </StyledTag>
      ))}
    </StyledTagList>
  )
}
