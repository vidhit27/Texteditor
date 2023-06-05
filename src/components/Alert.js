import React from 'react'

export default function alert(props) {
  return (
    <div style={{height:'70px'}}>
    { props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
     <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>
  }
  </div>

  )
}
