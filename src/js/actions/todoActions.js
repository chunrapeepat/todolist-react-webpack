var addList = (todo) => {
  return {
    type: 'ADD_LIST',
    payload: {
      todo: todo
    }
  }
}

exports.addList = addList;
