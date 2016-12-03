import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addList } from '../actions/todoActions.js'

class ViewTodo extends React.Component {
  Rendering(){
    var TodoDesign = {
      'background': '#fafafa',
      'width': '460px',
      'padding': '10px 20px',
      'border': '1px solid #ccc'
    }
    return this.props.todo.map((todo, i) => {
      return(
        <div style={TodoDesign} key={i}>{todo}</div>
      )
    })
  }
  render(){
    return(
      <div>
        { this.Rendering() }
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(ViewTodo)
