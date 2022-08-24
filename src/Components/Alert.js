import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
