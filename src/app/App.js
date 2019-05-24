import React, { useState, useEffect } from 'react'
import LayoutMain from './LayoutMain'
import GlobalStyles from '../misc/GlobalStyles'
import PlantList from '../cards/PlantList'
import Header from '../header/Header'
import plantObjects from '../mockdata'
import { setLocal, getLocal } from '../services'

let plants = plantObjects

export default function App() {
  const [greenList, setGreenList] = useState(getLocal('greenList') || [])

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
      <GlobalStyles />
      <Header />
      <LayoutMain>
        <PlantList plants={greenList} onBookmark={handleBookmark} />
      </LayoutMain>
    </div>
  )
}
