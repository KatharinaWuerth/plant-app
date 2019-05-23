import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const StyledCardList = styled.section`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export default function CardList({ cards }) {
  return (
    <StyledCardList>
      {cards.map(card => (
        <Card key={card.title} {...card} />
      ))}
    </StyledCardList>
  )
}
