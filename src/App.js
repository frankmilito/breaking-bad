import {useState, useEffect} from "react"
import Header from "./components/ui/Search"
import Search from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import axios from "axios"
import "./App.css"

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(results?.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
  return (
    <div className="container">
      <Search getQuery={q => setQuery(q)} />
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
