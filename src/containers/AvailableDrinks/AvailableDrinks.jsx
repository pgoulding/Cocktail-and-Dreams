import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AvailableDrinks extends Component {
  constructor(props){
    super()
    this.state={
      drinks:[]
    }
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div>
        <h3>No Drinks Match</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    ingredients: state.ingredients
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableDrinks)
