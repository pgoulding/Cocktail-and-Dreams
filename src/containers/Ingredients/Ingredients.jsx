import React, {Component} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { connect } from 'react-redux'
// import { getIngredientDetails } from '../../util/api/apiFetch';
import IngredientCard from '../../components/IngredientCard/IngredientCard';
import './Ingredients.scss'
class Ingredients extends Component {
  constructor(props) {
    super()
    this.state={
      ingredientsList:[]
    }
  }

  async componentDidMount() {
    // const ingredientsList = await this.props.userIngredients
    //   .map(async ingredient => getIngredientDetails(ingredient))
    // const returned  = await Promise.all(ingredientsList)
    this.ingredientCards()
    // this.ingredientCards(returned)
  }

  ingredientCards = () => {
    // console.log(cards)
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

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)
