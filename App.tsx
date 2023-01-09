import React, { useEffect } from 'react'
import AppContextProvider from './src/context/AppContext'
import { getAll, getAllHistory, WriteDb } from './src/database/realm'
import Navigation from './src/navigations/Navigation'

const App = () => {
  return (
    <AppContextProvider>
      <Navigation/>
    </AppContextProvider>
  )
}

export default App