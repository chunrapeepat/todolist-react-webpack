import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addList } from '../actions/todoActions.js'

class Input extends React.Component {
  submitForm(){
    var todo = document.getElementById('input').value
    document.getElementById('form').reset()
    this.props.addList(todo);
  }
  render(){
    const InputDesign = {
      'width': '460px',
      'padding': '10px 20px',
      'fontSize': '18px'
    }
    return(
      <div>
        <form id="form" action="javascript:void(0)" onSubmit={() => this.submitForm()}>
          <input id="input" style={InputDesign} type="text" placeholder="Enter your todo list..."/>
        </form>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

var matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addList: addList}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Input)
