import React from "react";
function Label(props) {
  return (
    <label htmlFor={props.For} id={props.Id}>
      {props.Content}
    </label>
  );
}
export default Label;
