import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeader = styled.header`
  width: 100%;
  background-color: #367860;
`

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>
}
