import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setLettersAC, setDataAC } from "./redux/reducers/content.reducer"
import getFakeData from "./utils/fakeData"
import createLettersObject from "./utils/crLetterObject"

import Header from "@components/Header"
import Navbar from "@components/Navbar"
import Content from "@components/Content"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const lettersArray = createLettersObject()
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
