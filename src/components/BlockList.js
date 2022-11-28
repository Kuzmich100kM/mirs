import React from "react"
import Block from "@components/Block"

const BlockList = ({ blockList }) => {
  const { letter, blocks } = blockList

  return (
    <div className="block-list">
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
