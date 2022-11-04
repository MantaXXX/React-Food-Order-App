import classes from './Input.module.css'

// {...props.input} 回傳 input 內所有的 key-pairs
const Input = props => {
  return <div className={classes.input}>
    <label htmlFor={classes.input.id}>{props.label}</label>
    <input {...props.input} />
  </div>
}

export default Input