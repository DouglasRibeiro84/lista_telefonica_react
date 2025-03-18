import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
