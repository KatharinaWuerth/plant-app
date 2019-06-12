import styled from 'styled-components'

export const Card = styled.section`
  background: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 2px 2px 9px -1px darkgray;
  margin: 20px 0;
`

export const CardPlantImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  @media screen and (min-width: 600px) {
    height: 300px;
  }
  @media screen and (min-width: 980px) {
    height: 400px;
  }
`
export const CardTitle = styled.h3`
  margin-block-end: 0;
  margin-block-start: 0;
  align-self: center;
  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`
export const CardHeader = styled.header`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

export const CardTextbox = styled.section`
  padding: 20px;
`
export const CardLine = styled.div`
  background-color: #cbe1c2;
  height: 3px;
  border-radius: 1.5px;
  margin: 10px 0;
`
