import React from 'react'
import EditUserNotes from './EditUserNotes'
import ShowUserNotes from './ShowUserNotes'

export default function Notes({
  onUserInput,
  plant,
  value,
  editMode,
  changeEditMode,
}) {
  if (value) {
    return editMode ? (
      <EditUserNotes
        onSave={onUserInput}
        plant={plant}
        changeEditMode={changeEditMode}
      />
    ) : (
      <ShowUserNotes value={value} />
    )
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
