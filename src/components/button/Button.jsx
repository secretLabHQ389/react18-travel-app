import React from "react"
import "./button.scss"

function Button(props) {
  return <button type="submit" onClick={props.onClick}>{props.children}</button>
}

export default Button
