import React, { Component } from 'react'
import { getIngredientList, getIngredientDetails } from '../../util/api/apiFetch'
import { connect } from 'react-redux'
import { setIngredients } from '../../actions/index'

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

  addIngredients =(e) => {
    e.preventDefault()
    this.props.setIngredients(this.state.selectedIngredients)
  }

  handleChange= (e) => {
    if(!this.state.selectedIngredients.includes(e.target.value)) {
      this.setState({ selectedIngredients: [...this.state.selectedIngredients, e.target.value] });
    } else {
      this.setState({selectedIngredients:[...this.state.selectedIngredients.filter(ingredient => ingredient !== e.target.value)]})
    }
  }

  optionsBlock = () => {
    return this.state.ingredientList.map(ingredient => {
      return <option value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
    })
  }

  selectedOption = () => {
    return this.state.selectedIngredients.map(selected => {
      return <li>{selected}</li>
    })
  }

  render() {
    return (
      <aside>
        <h3>Select Ingredient</h3>
        <form>
          <select value={this.state.selectedIngredients} multiple onChange={this.handleChange}>
            {this.optionsBlock()}
          </select>
          <button onClick={(e)=> this.addIngredients(e)}>Add Ingredients</button>
          <ul>
            {this.selectedOption()}
          </ul>
        </form>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  setIngredients: (ingredients) => dispatch(setIngredients(ingredients))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
