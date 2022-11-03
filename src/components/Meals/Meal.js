import { Fragment } from "react"
import MealSummary from "./MealSummary"
import AvailAbleMeals from "./AvailableMeals"

const Meal = (props) => {
  return <Fragment>
    <MealSummary />
    <AvailAbleMeals />
  </Fragment>
}

export default Meal