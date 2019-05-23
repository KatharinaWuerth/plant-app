import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = styled.section`
  background: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin-bottom: 20px;
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

export default function Card({ img, alt, title }) {
  console.log(title)
  return (
    <StyledCard>
      <Image src={img} alt={alt} />
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
