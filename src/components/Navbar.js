import React from "react"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { lettersObj, dataArr } = useSelector(state => state.content)

  const lettersArr = Object.keys(lettersObj)

  const letterList = lettersArr.map(letter => {
    let anchor = letter

    const isSelected = dataArr.find(el => {
      if (letter !== "0-9") return el.letter === letter

      anchor = el.letter
      return !isNaN(el.letter)
    })

    const cls1 = isSelected ? "selected" : ""
    const cls2 = lettersObj[letter] ? "visible" : ""

    return (
      <a className={`navbar__letter ${cls1} ${cls2}`} key={letter} href={`#${anchor}`}>
        {letter}
      </a>
    )
  })

  return (
    <div className="navbar">
      <div className="navbar__list">{letterList}</div>
    </div>
  )
}
export default Navbar
