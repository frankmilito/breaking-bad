import React from "react"
import Character from "./Character"
import Spinner from "../ui/Spinner"

const CharacterGrid = ({isLoading, items}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items?.map((item, index) => (
        <Character item={item} key={index} />
      ))}
    </section>
  )
}

export default CharacterGrid
