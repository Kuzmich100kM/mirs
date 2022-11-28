import React from "react"

const Block = ({ letter, block }) => {
  return (
    <div className="block">
      <span>{letter}</span>
      <span> {block.name}</span>
    </div>
  )
}

export default Block
