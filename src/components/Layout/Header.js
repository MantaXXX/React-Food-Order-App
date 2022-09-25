import { Fragment } from "react";

import HeaderCartBtn from './HeaderCartBtn'
import classes from './Header.module.css'
import mealImage from '../../asserts/meals.jpg'

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartBtn />
    </header>
    <div className={classes['main-image']} >
      <img src={mealImage} alt='meals served on table' />
    </div>
  </Fragment>
}


export default Header