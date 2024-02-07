import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Profile from './components/Profile'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <MyNavbar />
      </header>
      <Routes>
        <Route element={<Home />} path="/" />
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
