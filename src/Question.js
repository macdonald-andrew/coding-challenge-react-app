import React from 'react'

const Question = ({ text = '', onClickYes = () => { }, onClickNo = () => { } }) => {
  return (
    <div>
      <div>{text}</div>
      <button onClick={onClickYes}>yes</button>
      <button onClick={onClickNo}>no</button>
    </div>
  )
}

export default Question