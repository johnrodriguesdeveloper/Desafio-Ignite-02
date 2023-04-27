import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
*{
  margin : 0;
  padding : 0;
  box-sizing: border-box;
}
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme['base-title']};
  width: 68rem;
  margin: 2rem auto;
}
body,input ,button  {
  font-family:'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}
a, button{
  cursor: pointer;
}
`

export const TitleSectionCheckout = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;

  display: flex;
  align-items: center;
`
