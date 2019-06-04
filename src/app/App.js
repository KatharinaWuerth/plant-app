import React, { useState, useEffect } from 'react'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import PlantPage from '../plantPage/PlantPage'
import FilterPage from '../filterPage/FilterPage'
import { BrowserRouter, Route } from 'react-router-dom'
import uid from 'uid'

let mockPlants = plantObjects

// Liste von OptionGroups
const optionList = [
  {
    id: uid(),
    options: [
      { id: 'room', label: 'Wohnungspflanze' },
      { id: 'not-room', label: 'Gartenpflanze' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-dark', label: 'heller Raum' },
      { id: 'dark', label: 'dunkler Raum' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-moist', label: 'niedrige Luftfeuchtigkeit' },
      { id: 'moist', label: 'hohe Luftfeuchtigkeit' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'easy', label: 'pflegeleicht' },
      { id: 'not-easy', label: 'grüner Daumen' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-big', label: 'kleine Pflanze' },
      { id: 'big', label: 'große Pflanze' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-wide', label: 'schmale Pflanze' },
      { id: 'wide', label: 'ausladende Pflanze' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-toxic', label: 'tierfreundlich' },
      { id: 'toxic', label: 'ungenießbar' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'winter', label: 'frotsbeständig' },
      { id: 'not-winter', label: 'temperaturempfindlich' },
    ],
  },
  {
    id: uid(),
    options: [
      { id: 'not-allergenic', label: 'allergikerfreundlich' },
      { id: 'allergenic', label: 'allergen' },
    ],
  },
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

  function doesOptionGroupIncludeOption(optionGroup, optionId) {
    return (
      optionGroup.options.filter(option => option.id === optionId).length !== 0
    )
  }

  function getOptionGroupsByOptionId(optionId) {
    const containingOptionGroups = optionList.filter(optionGroup =>
      doesOptionGroupIncludeOption(optionGroup, optionId)
    )
    return containingOptionGroups
  }

  function handleOptionSelect(optionId) {
    if (selection.includes(optionId)) {
      const newSelection = selection.filter(
        selectedOptionId => selectedOptionId !== optionId
      )
      setSelection(newSelection)
      return
    }

    const containingOptionGroups = getOptionGroupsByOptionId(optionId)
    const containingOptionGroup = containingOptionGroups[0]
    const optionsToDeselect = containingOptionGroup.options.map(
      option => option.id
    )

    const newSelection = selection.filter(
      optionId => !optionsToDeselect.includes(optionId)
    )
    setSelection([...newSelection, optionId])
  }

  function getFilteredPlants() {
    const plantList = plants
    const filteredPlants = plantList.filter(plant =>
      hasSelectedOption(plant.tagList, selection)
    )
    function hasSelectedOption(tagList, selection) {
      const matchedOption = selection.filter(
        option => tagList.indexOf(option) !== -1
      )
      return matchedOption.length > 0
    }
    return filteredPlants
  }

  function getOptionLabel(tag) {
    const optionGroupArray = getOptionGroupsByOptionId(tag)
    const optionArray = optionGroupArray[0].options.filter(
      option => option.id === tag
    )
    return optionArray[0].label
  }

  return (
    <BrowserRouter>
      <Route
        exact
        path="/filter"
        render={props => (
          <FilterPage
            optionList={optionList}
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
            getOptionLabel={getOptionLabel}
            selection={selection}
          />
        )}
      />
    </BrowserRouter>
  )
}
