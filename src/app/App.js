import React from 'react'
import styled from 'styled-components'
import AppGrid from './AppGrid'
import GlobalStyles from '../misc/GlobalStyles'
import Card from '../cards/Card'
//GlobalStyles noch importieren nach dem Anpassen

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <AppGrid>
        <Card name={`Testname`} />
        <Card name={`2222`} />
        <Card name={`Testsdfksfsname`} />
      </AppGrid>
    </div>
  )
}
