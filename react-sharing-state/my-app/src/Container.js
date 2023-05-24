import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex > 4) {
      setCurrentIndex(currentIndex - items.length + 1);
    }
  }

  function handlePrevClick() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex < 1) {
      setCurrentIndex(currentIndex + items.length - 1)
    }
  }

  function handleSelect(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div>{items[currentIndex]}</div>
      <div>
        <CustomButton text="Prev" onCustomClick={handlePrevClick}/>
        <Indicators count={items.length} index={currentIndex} onSelect={handleSelect}/>
        <CustomButton text="Next" onCustomClick={handleNextClick}/>
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text , bgColor = 'white', onCustomClick}) {
  return <button
  style={{ backgroundColor: bgColor }}
  onClick={() => onCustomClick(text)}>
    {text}
  </button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, index, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<CustomButton key={i} text={i}
    bgColor={index === i ? "lightblue" : "white"}
    onCustomClick={() => onSelect(i)}
    />);
  }
  return <div>{buttons}</div>;
}
