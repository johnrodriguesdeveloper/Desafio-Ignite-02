import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Router } from './Router'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CardProvider } from './contexts/CardContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CardProvider>
          <Header />

          <Router />
        </CardProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
