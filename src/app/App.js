import React from 'react'
import styled from 'styled-components'
import LayoutMain from './LayoutMain'
import GlobalStyles from '../misc/GlobalStyles'
import CardList from '../cards/CardList'
import testPicture from '../img/testPicture1.jpg'
import Header from '../header/Header'

let cards = [
  { title: 'test1', img: testPicture },
  { title: 'test2', img: testPicture },
  { title: 'test3', img: testPicture },
]

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <LayoutMain>
        <CardList cards={cards} />
      </LayoutMain>
    </div>
  )
}
