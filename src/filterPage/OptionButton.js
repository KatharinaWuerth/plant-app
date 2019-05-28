import React from 'react'
import styled from 'styled-components'

const StyledOptionButton = styled.input`
  padding: 15px;
  border-radius: 7px;
  background: white;
  box-shadow: 2px 2px 9px -1px darkgray;
`

export default function OptionButton({ value }) {
  return <StyledOptionButton type="button" value={value} />
}
