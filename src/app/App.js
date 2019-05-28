import React, { useState, useEffect } from 'react'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import styled from 'styled-components'
import PlantPage from '../plantPage/PlantPage'
import FilterPage from '../filterPage/FilterPage'
import { BrowserRouter, Route } from 'react-router-dom'

let plants = plantObjects

let optionList = [
  'Wohnungspflanze',
  'Gartenpflanze',
  'heller Raum',
  'dunkler Raum',
  'pflegeleicht',
  'grüner Daumen',
  'große Pflanze',
  'kleine Pflanze',
  'schmale Pflanze',
  'ausladende Pflanze',
  'tierfreundlich',
  'ungenießbar',
  'hohe Luftfeuchtigkeit',
  'niedrige Luftfeuchtigkeit',
  'temperaturempfindlich',
  'frostbeständig',
  'allergikerfreundlich',
  'allergen',
]
export { optionList }

export default function App() {
  const [greenList, setGreenList] = useState(getLocal('greenList') || plants)

  useEffect(() => {
    setLocal('greenList', greenList)
  }, [greenList])

  function handleBookmark(id) {
    const newGreenList = [...greenList]
    const index = newGreenList.map(plant => plant.id).indexOf(id)
    newGreenList[index].isBookmarked = !newGreenList[index].isBookmarked
    setGreenList(newGreenList)
  }

  return (
    <div>
      <FilterPage />
      <PlantPage plants={greenList} onBookmark={handleBookmark} />
    </div>
  )
}
