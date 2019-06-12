import React, { useState, useEffect } from 'react'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import PlantPage from '../plantPage/PlantPage'
import FilterPage from '../filterPage/FilterPage'
import { BrowserRouter, Route } from 'react-router-dom'
import uid from 'uid'
import FavPage from '../FavPage'
import GlobalStyles from '../misc/GlobalStyles'
import DetailPage from '../detailPage/DetailPage'
import ScrollMemory from 'react-router-scroll-memory'

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
    if (selection.length === 0) {
      return plantList
    } else {
      const filteredPlants = plantList.filter(plant =>
        hasSelectedOption(plant.tagList)
      )
      function hasSelectedOption(tagList) {
        const matchedOption = getMatchedOptions(tagList)
        return matchedOption.length > 0
      }
      return filteredPlants
    }
  }

  function getMatchedOptions(tagList) {
    return selection.filter(option => tagList.indexOf(option) !== -1)
  }

  function getMatchedNum(plant) {
    return getMatchedOptions(plant.tagList).length
  }

  function getSortedFilteredPlants() {
    const filteredPlants = getFilteredPlants()
    const newPlantsWithMatchNum = filteredPlants.map(plant => ({
      ...plant,
      matchNum: getMatchedNum(plant),
    }))
    const sortedFilteredPlants = newPlantsWithMatchNum.sort(
      (a, b) => b.matchNum - a.matchNum
    )

    return sortedFilteredPlants
  }

  function getFavSortedFilteredPlants() {
    const sortedFilteredPlants = getSortedFilteredPlants()
    const favSortedFileredPlants = sortedFilteredPlants.filter(
      plant => plant.isBookmarked
    )
    return favSortedFileredPlants
  }

  function getOptionLabel(tag) {
    const optionGroupArray = getOptionGroupsByOptionId(tag)
    const optionArray = optionGroupArray[0].options.filter(
      option => option.id === tag
    )
    return optionArray[0].label
  }

  function handleGoBack(history) {
    history.goBack()
  }

  return (
    <BrowserRouter>
      <ScrollMemory elementID="plantlist" />
      <GlobalStyles />
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
        path="/matched"
        render={props => (
          <PlantPage
            plants={
              getSortedFilteredPlants().length > 0
                ? getSortedFilteredPlants()
                : plants
            }
            onBookmark={handleBookmark}
            {...props}
            getOptionLabel={getOptionLabel}
            selection={selection}
          />
        )}
      />
      <Route
        exact
        path="/favourite"
        render={props => (
          <FavPage
            plants={getFavSortedFilteredPlants()}
            onBookmark={handleBookmark}
            {...props}
            getOptionLabel={getOptionLabel}
            selection={selection}
          />
        )}
      />
      <Route
        exact
        path="/detail/:id"
        render={props => (
          <DetailPage
            getOptionLabel={getOptionLabel}
            selection={selection}
            onBookmark={handleBookmark}
            plants={plants}
            onClick={handleGoBack}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  )
}
