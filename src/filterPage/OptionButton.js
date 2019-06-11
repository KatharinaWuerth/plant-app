import styled from 'styled-components'

const OptionButton = styled.button`
  padding: 10px;
  border-radius: 7px;
  background: ${props => (props.active ? '#CBE1C2' : 'white')};
  font-size: 0.85rem;
  box-shadow: 2px 2px 9px -1px darkgray;
  outline: none !important;
  @media screen and (min-width: 600px) {
    font-size: 1.7rem;
  }
`

export default OptionButton
