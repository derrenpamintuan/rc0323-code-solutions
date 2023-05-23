function CustomButton({color, text, onCustomClick}) {

  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{backgroundColor: color}}>
      {text}
      </button>
  )
}

export default CustomButton;
