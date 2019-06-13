import React, { useState } from 'react'
import EditUserNotes from './EditUserNotes'
import ShowUserNotes from './ShowUserNotes'

export default function Notes({
  onUserInput,
  plant,
  value,
  editMode,
  changeEditMode,
}) {
  function getRigthOutput() {
    if (value) {
      if (editMode) {
        return (
          <EditUserNotes
            onSave={onUserInput}
            plant={plant}
            changeEditMode={changeEditMode}
          />
        )
      } else {
        return <ShowUserNotes value={value} />
      }
    } else {
      if (editMode) {
        return (
          <EditUserNotes
            onSave={onUserInput}
            plant={plant}
            changeEditMode={changeEditMode}
          />
        )
      } else {
        return null
      }
    }
  }
  return <div>{getRigthOutput()}</div>
}
