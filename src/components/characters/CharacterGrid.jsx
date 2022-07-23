import React from "react"
import Character from "./Character"

const CharacterGrid = ({isLoading, items}) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items?.map((item, index) => (
        <Character item={item} key={index} />
      ))}
    </section>
  )
}

export default CharacterGrid
