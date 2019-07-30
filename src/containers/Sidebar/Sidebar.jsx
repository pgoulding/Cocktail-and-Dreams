import React, { Component } from 'react'
import { getIngredientList, getIngredientDetails } from '../../util/api/apiFetch'
import { connect } from 'react-redux'
import { addIngredients } from '../../actions/index'
import './Sidebar.scss'
export class Sidebar extends Component {
  constructor(props) {
    super()
    this.state={
      ingredientList:[],
      selectedIngredients:[]
    }
  }

  async componentDidMount(){
    const ingredientList = await getIngredientList()
    this.setState({ingredientList})
  }

  sendIngredientsToStore =async (e) => {
    e.preventDefault()
    const ingredientsList = await this.state.selectedIngredients
      .map(async ingredient => getIngredientDetails(ingredient))
    const returned = await Promise.all(ingredientsList)
    this.props.addIngredients(returned)
    this.setState({selectedIngredients:[]})
  }

  handleChange= (e) => {
    if(!this.state.selectedIngredients.includes(e.target.value)) {
      this.setState({ selectedIngredients: [...this.state.selectedIngredients, e.target.value] });
    } else {
      this.setState({selectedIngredients:[...this.state.selectedIngredients.filter(ingredient => ingredient !== e.target.value)]})
    }
  }

  removeItem=(e) => {
    e.preventDefault()
    this.setState({selectedIngredients:[...this.state.selectedIngredients.filter(item => item !==e.target.value)]})
  }

  optionsBlock = () => {
    return this.state.ingredientList.map(ingredient => {
      return <option value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
    })
  }

  selectedOption = () => {
    return this.state.selectedIngredients.map(selected => {
      return <button value={selected} onClick={(e)=> this.removeItem(e)}>{selected}</button>
    })
  }

  render() { 
    return (
      <aside>
        <h3>Select Ingredient</h3>
        <div className='ingredient__select-output'>
            {this.selectedOption()}
        </div>
        <form>
          <select value={this.state.selectedIngredients} multiple onChange={this.handleChange}>
            {this.optionsBlock()}
          </select>
          <button onClick={(e)=> this.sendIngredientsToStore(e)}>Add Ingredients</button>
        </form>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  addIngredients: (ingredients) => dispatch(addIngredients(ingredients))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
