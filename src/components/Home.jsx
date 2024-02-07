import { Container } from 'react-bootstrap'
import MyHero from './MyHero'
import Titles from './Titles'
import MyFooter from './MyFooter'

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

const Home = () => (
  <Container fluid className="px-4">
    <main>
      <MyHero />
      <Titles
        search={searchText[Math.floor(Math.random() * searchText.length)]}
        apiUrl={apiUrl}
      />
      <Titles
        search={searchText[Math.floor(Math.random() * searchText.length)]}
        apiUrl={apiUrl}
      />
      <Titles
        search={searchText[Math.floor(Math.random() * searchText.length)]}
        apiUrl={apiUrl}
      />
    </main>
    <footer>
      <MyFooter />
    </footer>
  </Container>
)

export default Home
