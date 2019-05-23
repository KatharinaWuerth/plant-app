import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

Card.propTypes = {
  cards: PropTypes.array,
}
