import React from "react"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { lettersArr, dataArr } = useSelector(state => state.content)
  console.log("lettersArr", lettersArr)
  console.log("dataArr", dataArr)

  //  useEffect(() => {
  //   if(lettersArr, dataArr){
  //
  //   }
  //
  //  }, [lettersArr, dataArr])
  const list = lettersArr.map(letter => {
    const isSelected = dataArr.find(el => el.letter === letter)
    const cls = isSelected ? "navbar__letter selected" : "navbar__letter"

    return (
      <div className={cls} key={letter}>
        {letter}
      </div>
    )
  })

  return (
    <div className="navbar">
      <div className="navbar__list">{list}</div>
    </div>
  )
}
export default Navbar
