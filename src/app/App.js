import React, { useState, useEffect } from 'react'
//import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import PlantPage from '../plantPage/PlantPage'
import FilterPage from '../filterPage/FilterPage'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import optionList from '../OptionList'
import FavPage from '../FavPage'
import GlobalStyles from '../misc/GlobalStyles'
import DetailPage from '../detailPage/DetailPage'
import ScrollMemory from 'react-router-scroll-memory'
import { getMatchedOptions } from '../utils'
import { getMatchedNum } from '../utils'
import { getPlants } from '../services'

//let mockPlants = plantObjects

export default function App() {
  const [plants, setPlants] = useState(getLocal('plants') || [])
  const [selection, setSelection] = useState(getLocal('selection') || [])

  useEffect(() => {
    getPlants()
      .then(data => setPlants(data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    setLocal('plants', plants)
  }, [plants])

  useEffect(() => {
    setLocal('selection', selection)
  }, [selection])

  function handleBookmark(id) {
    const newPlants = [...plants]
    const index = newPlants.map(plant => plant._id).indexOf(id)
    newPlants[index].isBookmarked = !newPlants[index].isBookmarked
    setPlants(newPlants)
  }

  function doesOptionsIncludeOption(options, optionId) {
    return options.filter(option => option.id === optionId).length !== 0
  }

  function getOptionGroupByOptionId(optionId) {
    const containingOptionGroups = optionList.filter(optionGroup =>
      doesOptionsIncludeOption(optionGroup.options, optionId)
    )
    return containingOptionGroups[0]
  }

  function handleOptionSelect(optionId) {
    if (selection.includes(optionId)) {
      // Remove, if option is already selected
      const newSelection = selection.filter(
        selectedOptionId => selectedOptionId !== optionId
      )
      setSelection(newSelection)
    } else {
      // Remove other options of the same group
      const containingOptionGroup = getOptionGroupByOptionId(optionId)
      const optionIdsToDeselect = containingOptionGroup.options.map(
        option => option.id
      )
      const newSelection = selection.filter(
        optionId => !optionIdsToDeselect.includes(optionId)
      )
      setSelection([...newSelection, optionId])
    }
  }

  function getFilteredPlants() {
    const plantList = plants
    if (selection.length === 0) {
      return plantList
    } else {
      const filteredPlants = plantList.filter(plant =>
        hasSelectedOption(plant.tagList)
      )
      return filteredPlants
    }
  }

  function hasSelectedOption(tagList) {
    const matchedOption = getMatchedOptions(tagList, selection)
    return matchedOption.length > 0
  }

  function getSortedFilteredPlants() {
    const filteredPlants = getFilteredPlants()
    const newPlantsWithMatchNum = filteredPlants.map(plant => ({
      ...plant,
      matchNum: getMatchedNum(plant, selection),
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
    const optionGroup = getOptionGroupByOptionId(tag)
    const optionArray = optionGroup.options.filter(option => option.id === tag)
    return optionArray[0].label
  }

  function handleGoBack(history) {
    history.goBack()
  }

  function handleUserInput(note, id) {
    const newPlants = [...plants]
    const index = newPlants.map(plant => plant._id).indexOf(id)
    newPlants[index].userNote = note.trim()
    setPlants(newPlants)
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
            onUserInput={handleUserInput}
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
            onUserInput={handleUserInput}
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
            onUserInput={handleUserInput}
            {...props}
          />
        )}
      />
      <Route exact path="/" render={() => <Redirect to="/filter" />} />
    </BrowserRouter>
  )
}
