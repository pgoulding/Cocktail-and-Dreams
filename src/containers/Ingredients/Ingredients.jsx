import React, {Component} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { connect } from 'react-redux'
import IngredientCard from '../../components/IngredientCard/IngredientCard';
import './Ingredients.scss'
class Ingredients extends Component {
  ingredientCards = () => {
    return this.props.ingredients.map(item => {
      return <IngredientCard ingredient={item} />
    })
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="ingredient-cards-container">
          {this.ingredientCards()}
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  ingredients: state.ingredients
})


export default connect(mapStateToProps)(Ingredients)
