import React from 'react'
import styled from 'styled-components'
import AppGrid from './AppGrid'
import GlobalStyles from '../misc/GlobalStyles'
import Card from '../cards/Card'

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <AppGrid>
        <Card title={`Testname`} />
        <Card title={`2222`} />
        <Card title={`Testsdfksfsname`} />
      </AppGrid>
    </div>
  )
}
