import React from 'react'

import Input from '../components/Input'
import ViewTodo from '../components/ViewTodo'

class TodoList extends React.Component {
  render(){
    const container = {
      'margin': '50px auto',
      'width': '500px'
    }
    return(
      <div style={container}>
        <Input/>
        <ViewTodo/>
      </div>
    )
  }
}

export default TodoList
