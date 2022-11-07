import React from 'react'
import classes from './Input.module.css'

// {...props.input} 回傳 input 內所有的 key-pairs
const Input = React.forwardRef((props, ref) => {
  return <div className={classes.input}>
    <label htmlFor={classes.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
  </div>
})

export default Input