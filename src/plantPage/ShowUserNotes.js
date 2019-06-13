import React from 'react'
import styled from 'styled-components'
import { CardLine } from '../common/CardComponents'
import Formcontainer from '../common/FormContainer'
import FormLabel from '../common/FormLabel'

const StyledNote = styled.p`
  width: 100%;
`

export default function ShowUserNotes({ value }) {
  return (
    <span>
      <CardLine />
      <Formcontainer>
        <FormLabel>Notiz</FormLabel>
        <StyledNote>{value}</StyledNote>
      </Formcontainer>
    </span>
  )
}
