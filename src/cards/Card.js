import React from 'react'
import styled from 'styled-components'
import testPicture from '../img/testPicture1.jpg'

const StyledCard = styled.section`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin: 20px 0;
`

const Image = styled.img`
  width: 100%;
`
const StyledTextbox = styled.section`
  padding: 20px;
`

export default function Card({ img, name }) {
  return (
    <StyledCard>
      <Image src={testPicture} />
      <StyledTextbox>
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          ratione, magnam unde, quibusdam officiis quis enim perspiciatis
          adipisci sunt saepe quisquam earum debitis necessitatibus iusto totam
          voluptas labore. Quaerat, distinctio!
        </p>
      </StyledTextbox>
    </StyledCard>
  )
}
