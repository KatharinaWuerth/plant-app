import React, { useState, useEffect } from 'react'
import GlobalStyles from '../misc/GlobalStyles'
import PlantList from '../cards/PlantList'
import Header from '../header/Header'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'
import styled from 'styled-components'
import ButtonList from '../filterPage/ButtonList'

let plants = plantObjects

const GridPlantList = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  background: linear-gradient(0deg, white 70%, #367860 30%);
`

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
      <ButtonList />
      <GridPlantList>
        <GlobalStyles />
        <Header />
        <PlantList plants={greenList} onBookmark={handleBookmark} />
      </GridPlantList>
    </div>
  )
}
