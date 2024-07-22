import React from 'react'
import './components/CharacterList.css'
import CharacterList from './components/CharacterList'
const App = () => {
  return (
    <div className="App">
        <h1>Rick and Morty Characters</h1>
        <CharacterList />
    </div>
  )
}

export default App;