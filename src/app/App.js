import React, { useState, useEffect } from 'react'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import styled from 'styled-components'
import PlantPage from '../plantPage/PlantPage'
import FilterPage from '../filterPage/FilterPage'
import { BrowserRouter, Route } from 'react-router-dom'

let plants = plantObjects

const optionList = [
  [
    { id: 'room', label: 'Wohnungspflanze' },
    { id: 'not-room', label: 'Gartenpflanze' },
  ],
  [
    { id: 'not-dark', label: 'heller Raum' },
    { id: 'dark', label: 'dunkler Raum' },
  ],
  [
    { id: 'not-moist', label: 'niedrige Luftfeuchtigkeit' },
    { id: 'moist', label: 'hohe Luftfeuchtigkeit' },
  ],
  [
    { id: 'easy', label: 'pflegeleicht' },
    { id: 'not-easy', label: 'grüner Daumen' },
  ],
  [
    { id: 'not-big', label: 'kleine Pflanze' },
    { id: 'big', label: 'große Pflanze' },
  ],
  [
    { id: 'not-wide', label: 'schmale Pflanze' },
    { id: 'wide', label: 'ausladende Pflanze' },
  ],
  [
    { id: 'not-toxic', label: 'tierfreundlich' },
    { id: 'toxic', label: 'ungenießbar' },
  ],
  [
    { id: 'winter', label: 'frotsbeständig' },
    { id: 'not-winter', label: 'temperaturempfindlich' },
  ],
  [
    { id: 'not-allergenic', label: 'allergikerfreundlich' },
    { id: 'allergenic', label: 'allergen' },
  ],
]

export default function App() {
  const [greenList, setGreenList] = useState(getLocal('greenList') || plants)
  const [selection, setSelection] = useState([])

  useEffect(() => {
    console.log(selection)
  }, [selection])

  useEffect(() => {
    setLocal('greenList', greenList)
  }, [greenList])

  function handleBookmark(id) {
    const newGreenList = [...greenList]
    const index = newGreenList.map(plant => plant.id).indexOf(id)
    newGreenList[index].isBookmarked = !newGreenList[index].isBookmarked
    setGreenList(newGreenList)
  }

  function handleOptionSelect(id) {
    // item is already seleted -> just remove
    if (selection.includes(id)) {
      setSelection(selection.filter(item => item !== id))
      return
    }

    // check if item is a 'not'-item, remove opposite + add item
    if (id.includes('not')) {
      const partId = id.split('-')[1]
      const filtered = selection.filter(item => item !== partId)
      setSelection([...filtered, id])
      return
    }
    // remove possible 'not'-item + add item
    const filtered = selection.filter(item => item !== `not-${id}`)
    setSelection([...filtered, id])
  }

  return (
    <BrowserRouter>
      <Route
        exact
        path="/filter"
        render={props => (
          <FilterPage
            options={optionList}
            onOptionSelect={handleOptionSelect}
            selection={selection}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/matchedPlants"
        render={props => (
          <PlantPage
            plants={greenList}
            onBookmark={handleBookmark}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  )
}
