import styled from 'styled-components'
import React from 'react'

const StyledMain = styled.main`
  overflow: hidden;
  width: 100%;
  overflow-y: scroll;
  padding: 30px 0;
  height: 100vh;
`
export function LayoutMain() {
  return <StyledMain />
}
