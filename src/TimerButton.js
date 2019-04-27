import React from 'react'

function TimerButton({status, handleClick}) {
  return (
    <button onClick={handleClick}>
        {status ? "Pause" : "Start"}
    </button>
  )
}

export default TimerButton;