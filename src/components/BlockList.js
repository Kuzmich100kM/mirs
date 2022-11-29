import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { useInView } from "react-intersection-observer"
import { changeLettersAC } from "../redux/reducers/content.reducer"
import Block from "@components/Block"

const BlockList = ({ blockList }) => {
  const { letter, blocks } = blockList

  const dispatch = useDispatch()

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-175px 0px 0px 0px",
  })

  useEffect(() => {
    if (isNaN(letter)) dispatch(changeLettersAC({ [letter]: inView }))
    else dispatch(changeLettersAC({ "0-9": inView }))
  }, [inView, dispatch, letter])

  return (
    <div className="block-list" ref={ref}>
      <div className="block-list__fake" id={letter}></div>
      <div className="block-list__letter">{letter}</div>
      <div className="block-list__wrap">
        {blocks.map(block => {
          return <Block key={block.id} letter={letter} block={block} />
        })}
      </div>
      <div className="block-list__devider" />
    </div>
  )
}

export default BlockList
