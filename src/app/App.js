import React from 'react'
import styled from 'styled-components'
import AppGrid from './AppGrid'
import GlobalStyles from '../misc/GlobalStyles'
import CardList from '../cards/CardList'
import testPicture from '../img/testPicture1.jpg'

let cards = [
  { title: 'test1', img: testPicture },
  { title: 'test2', img: testPicture },
  { title: 'test3', img: testPicture },
]

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <AppGrid>
        <CardList cards={cards} />
      </AppGrid>
    </div>
  )
}
