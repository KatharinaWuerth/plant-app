import React, { useState } from 'react'
import LayoutMain from './LayoutMain'
import GlobalStyles from '../misc/GlobalStyles'
import PlantList from '../cards/PlantList'
import Header from '../header/Header'
import plantObjects from '../mockdata'

let plants = plantObjects

export default function App() {
  const [greenList, setGreenList] = useState(plants)

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
