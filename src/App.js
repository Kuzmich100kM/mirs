import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setLettersAC, setDataAC } from "./redux/reducers/content.reducer"
import { getFakeData } from "./redux/fakeData"

import Header from "@components/Header"
import Navbar from "@components/Navbar"
import Content from "@components/Content"

const getLetters = () => {
  const charsArr = []
  for (let i = 0; i < 26; i++) {
    charsArr.push(String.fromCharCode(65 + i))
  }
  return charsArr
}

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const lettersArray = getLetters()
    dispatch(setLettersAC(lettersArray))
  }, [dispatch])

  useEffect(() => {
    const dataArray = getFakeData()
    dispatch(setDataAC(dataArray))
  }, [dispatch])

  return (
    <div className="app container">
      <Header />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
