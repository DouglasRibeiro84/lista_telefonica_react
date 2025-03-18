import { useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import Temas from './components/Temas'

function App() {
  const [estaTemaDark, setTemaDark] = useState(false)

  function trocaTema() {
    setTemaDark(!estaTemaDark)
  }

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/novo',
      element: <Cadastro />
    }
  ])

  return (
    <ThemeProvider theme={estaTemaDark ? temaDark : temaLight}>
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
          <Temas trocaTema={trocaTema} />
        </Container>
      </Provider>
    </ThemeProvider>
  )
}

export default App
