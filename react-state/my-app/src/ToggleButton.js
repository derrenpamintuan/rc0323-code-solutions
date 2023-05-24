import { useState } from 'react';

export default function ToggleButton(props) {
  let [isClicked, setIsClicked] = useState(false);
  console.log('Value of useState:', isClicked);

  function handleClick() {
    console.log('Value before setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('Value after setter:', isClicked);
  }

  return (
    <button style={{backgroundColor: isClicked ? props.color : 'white'}}
    onClick={handleClick}>
      {props.text}
    </button>
  )
}
