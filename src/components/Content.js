import React from "react"
import { useSelector } from "react-redux"

import BlockList from "@components/BlockList"

const Content = () => {
  const { dataArr } = useSelector(state => state.content)

  return (
    <div className="content">
      {dataArr.map(blocks => {
        return <BlockList key={blocks.letter} blockList={blocks} />
      })}
    </div>
  )
}

export default Content
