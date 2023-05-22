function CustomButton (props) {
  console.log(props);
  return (
    <button style={{backgroundColor: props.color}}>{props.text}</button>
  )
}

export default CustomButton;
