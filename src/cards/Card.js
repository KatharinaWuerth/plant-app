import React from 'react'
import styled from 'styled-components'
import testPicture from '../img/testPicture1.jpg'
import PropTypes from 'prop-types'

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

const StyledName = styled.h3`
  margin-block-end: 0;
`

const StyledTextbox = styled.section`
  padding: 20px;
`
const StyledLine = styled.hr`
  border: 1.5px solid #cbe1c2;
  border-radius: 7px;
  width: 30%;
  display: inline-flex;
  text-align: left;
  margin: 0;
`

export default function Card({ img, title }) {
  return (
    <StyledCard>
      <Image src={testPicture} img={img} />
      <StyledTextbox>
        <StyledName>{title}</StyledName>
        <StyledLine />
      </StyledTextbox>
    </StyledCard>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
}
