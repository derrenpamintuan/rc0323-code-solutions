import { useState } from "react"
import "./Accordian.css"

export default function Accordian({ topics }) {
  const [openPanel, setOpenPanel] = useState();

  function handleOpenPanel(topic) {
    if(openPanel === topic) {
      setOpenPanel(undefined);
    } else {
      setOpenPanel(topic)
    }
  }

  return (
    <div>
      {topics.map(topic =>
        <Panel
        key={topic.id}
        topic={topic}
        isActive={topic.id === openPanel?.id}
        onClick={() => handleOpenPanel(topic)}/>
      )}
    </div>
  )
}

function Panel({ topic, isActive, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{topic.title}</button>
      {isActive ? (
        <p>{topic.content}</p>
      ) : (
        <></>
      )}
    </div>
  )
}
