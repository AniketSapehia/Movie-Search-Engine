import './App.css'
import MovieCard from './components/MovieCard.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

function Text({prop}) {
  return (
    <div>
      <h1>{prop}</h1>
    </div>
  )
}

export default App
