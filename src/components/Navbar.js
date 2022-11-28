import React from "react"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { lettersArr, dataArr } = useSelector(state => state.content)

  const letterList = lettersArr.map(letter => {
    const isSelected = dataArr.find(el => el.letter === letter)
    const cls = isSelected ? "navbar__letter selected" : "navbar__letter"

    return (
      <a className={cls} key={letter} href={`#${letter}`}>
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
