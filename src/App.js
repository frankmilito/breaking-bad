import {useState, useEffect} from "react"
import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import axios from "axios"
import "./App.css"

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://breakingbadapi.com/api/characters`)
      console.log(results.data)
      setItems(results?.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
