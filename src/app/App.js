import React, { useState, useEffect } from 'react'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import PlantPage from '../plantPage/PlantPage'
import FilterPage from '../filterPage/FilterPage'
import { BrowserRouter, Route } from 'react-router-dom'

let mockPlants = plantObjects

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
  const [plants, setPlants] = useState(getLocal('plants') || mockPlants)
  const [selection, setSelection] = useState(getLocal('selection') || [])

  useEffect(() => {
    setLocal('plants', plants)
  }, [plants])

  useEffect(() => {
    setLocal('selection', selection)
  }, [selection])

  function handleBookmark(id) {
    const newPlants = [...plants]
    const index = newPlants.map(plant => plant.id).indexOf(id)
    newPlants[index].isBookmarked = !newPlants[index].isBookmarked
    setPlants(newPlants)
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

  function getFilteredPlants() {
    const plantList = plants
    const filteredPlants = plantList.filter(plant =>
      hasSelectedOption(plant.tagList, selection)
    )
    function hasSelectedOption(tagList, selection) {
      const matchedOption = selection.filter(
        option => tagList.indexOf(option) >= 0
      )
      return matchedOption.length > 0
    }
    return filteredPlants
  }

  // Dinge sortieren nach Übereinstimmungen + farbig hervorheben, was übereinstimmt + Eigenschaften gut benennen und nicht mit not- ..

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
            plants={
              getFilteredPlants().length > 0 ? getFilteredPlants() : plants
            }
            onBookmark={handleBookmark}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  )
}
