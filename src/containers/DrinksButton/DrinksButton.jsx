import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const DrinksButton = ({props}) => {

  const 

    return (
      <div>
        <button onClick>

        </button>
      </div>
    )

}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksButton)
