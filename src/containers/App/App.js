import React, { Component } from 'react'
import { getIngredientList, getIngredientDetails } from '../../util/api/apiFetch'
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux'
import Header from '../../components/Header/Header';
import './App.css'
export class App extends Component {
  constructor(){
    super()
    this.state ={

    }
  }
  async componentDidMount() {
    
  }

  render() {
    return (
      <main>
        <Header />
        <Sidebar />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({

})


const mapDispatchToProps=(dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(App)

