import './HotButton.css';
import { useState } from 'react';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1)
    console.log(clicks + 1);
  }

  if (clicks === 0) {
    console.log('current temp: cold')
  } else if (clicks === 3) {
    console.log('current temp: cool')
  } else if (clicks === 6) {
    console.log('current temp: tepid')
  } else if (clicks === 9) {
    console.log('current temp: warm')
  } else if (clicks === 12) {
    console.log('current temp: hot')
  } else if (clicks === 15) {
    console.log('current temp: nuclear')
  }

  function changeTemperature() {
    if (clicks < 3) {
      return 'cold' ;
    } else if (clicks < 6) {
      return 'cool';
    } else if (clicks < 9) {
      return 'tepid';
    } else if (clicks < 12) {
      return 'warm';
    } else if (clicks < 15) {
      return 'hot';
    } else {
      return 'nuclear';
    }
  }

  const temperature = changeTemperature();

  return (
    <button
    style={{cursor: 'pointer'}}
    onClick={handleClick}
    className={`hot-button ${temperature}`}>
    Hot Button
    </button>
  )
}
