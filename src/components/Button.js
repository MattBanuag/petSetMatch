function Button(props) {
    let btnClass = props.isPrimary ? "Primary" : "Secondary";
  return (
    <>
        <button className={btnClass}>{btnClass}</button>
    </>
  )
}

export default Button;