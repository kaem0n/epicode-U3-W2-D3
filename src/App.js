import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyHero from './components/MyHero'
import Titles from './components/Titles'
import Profile from './components/Profile'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails'

const apiUrl = 'http://www.omdbapi.com/?apikey=82c26041&s='
const searchText = [
  { searchTerm: 'harry&20potter', title: 'Perché hai visto Harry Potter' },
  { searchTerm: 'star&20wars', title: 'Perché hai visto Star Wars' },
  { searchTerm: 'fast&20furious', title: 'Perché hai visto Fast & Furious' },
  { searchTerm: 'lord&20of&20the&20rings', title: 'Perché hai visto LOTR' },
  { searchTerm: 'avengers', title: 'Perché hai visto Avengers' },
  { searchTerm: 'scary&20movie', title: 'Perché hai visto Scary Movie' },
  { searchTerm: 'american', title: 'Storie Americane' },
  { searchTerm: 'transformers', title: 'Perché hai visto Transformers' },
  { searchTerm: 'x men', title: 'Perché hai visto X-Men' },
  { searchTerm: 'spiderman', title: 'Perché hai visto Spiderman' },
  {
    searchTerm: 'naked&20gun',
    title: 'Perché hai visto Una Pallottola Spuntata',
  },
  { searchTerm: 'documentary', title: 'Documentari' },
]

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <MyNavbar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid className="px-4">
              <main>
                <MyHero />
                <Titles
                  search={
                    searchText[Math.floor(Math.random() * searchText.length)]
                  }
                  apiUrl={apiUrl}
                />
                <Titles
                  search={
                    searchText[Math.floor(Math.random() * searchText.length)]
                  }
                  apiUrl={apiUrl}
                />
                <Titles
                  search={
                    searchText[Math.floor(Math.random() * searchText.length)]
                  }
                  apiUrl={apiUrl}
                />
              </main>
              <footer>
                <MyFooter />
              </footer>
            </Container>
          }
        />
        <Route element={<TVShows />} path="/tv-shows" />
        <Route element={<MovieDetails />} path="/movie-details/:movieId" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<NotFound />} path="/*" />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// 82c26041 <- API key
