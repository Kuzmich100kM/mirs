import React, { useEffect } from "react"

import Header from "@components/Header"
import Navbar from "@components/Navbar"
import Content from "@components/Content"
import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
import { setLettersAC } from "../src/reducers/content.reducer.js"
import { getData } from "./reducers/data.js"
import { setDataAC } from "./reducers/content.reducer"

const getLetters = () => {
  const charsArr = []
  for (let i = 0; i < 26; i++) {
    charsArr.push(String.fromCharCode(65 + i))
  }
  return charsArr
}

const App = () => {
  const dispatch = useDispatch()
  // const isAuth = useSelector(state => state.auth.isAuth)
  useEffect(() => {
    const lettersArray = getLetters()
    dispatch(setLettersAC(lettersArray))
  }, [])

  useEffect(() => {
    const dataArray = getData()
    console.log("dataArray", dataArray)
    dispatch(setDataAC(dataArray))
  }, [])
  return (
    <div className="app container">
      <Header />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
