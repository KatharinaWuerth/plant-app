import React, { useState } from 'react'
import styled from 'styled-components'
import { Save } from 'styled-icons/boxicons-regular/'
import { CardLine } from '../common/CardComponents'
import FormContainer from '../common/FormContainer'
import FormLabel from '../common/FormLabel'
import PropTypes from 'prop-types'

const StyledEditNote = styled.textarea`
  width: 85%;
  border: solid #367860 0.7px;
  line-height: 2;
  outline: none !important;
`

export default function EditUserNotes({ onSave, plant, changeEditMode }) {
  const [note, setNote] = useState(plant.userNote || '')

  function handleChange(event) {
    setNote(event.target.value)
  }

  function handleInput(event) {
    event.preventDefault()
    onSave(note, plant._id)
    changeEditMode()
  }
  return (
    <span>
      <CardLine />
      <FormContainer name="inputNote">
        <FormLabel>Notiz</FormLabel>
        <StyledEditNote
          type="text"
          placeholder={'Deine Notizen'}
          onChange={handleChange}
          value={note}
          autoFocus
        />
        <Save size={25} onClick={event => handleInput(event)} />
      </FormContainer>
    </span>
  )
}

EditUserNotes.propTypes = {
  onSave: PropTypes.func,
  plant: PropTypes.object,
  changeEditMode: PropTypes.func,
}
