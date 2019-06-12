import React, { useState } from 'react'
import styled from 'styled-components'
import { Save } from 'styled-icons/boxicons-regular/'
import { CardLine } from '../common/CardComponents'

const StyledNote = styled.textarea`
  width: 85%;
  border: solid #367860 0.7px;
  line-height: 2;
`
const StyledContainer = styled.form`
  display: flex;
  align-content: center;
  color: #367860;
  justify-content: space-between;
`

export default function UserNotes({ onSave, plant }) {
  const [note, setNote] = useState(plant.userNote || '')

  function handleChange(event) {
    setNote(event.target.value)
  }

  function handleInput(event) {
    event.preventDefault()
    onSave(note, plant.id)
  }
  return (
    <span>
      <CardLine />
      <StyledContainer name="inputNote">
        <StyledNote
          type="text"
          placeholder={'Deine Notizen'}
          onChange={handleChange}
          value={note}
        />
        <Save size={25} onClick={event => handleInput(event)} />
      </StyledContainer>
    </span>
  )
}
