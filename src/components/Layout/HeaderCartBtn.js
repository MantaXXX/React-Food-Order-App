import { useContext } from "react"

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"

import classes from "./HeaderCartBtn.module.css"

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.item.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
      {numberOfCartItems}
    </span>
  </button>
}

export default HeaderCartBtn