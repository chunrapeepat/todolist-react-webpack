export default function(state = [], action){
  switch (action.type) {

    case 'ADD_LIST':
      return [...state, action.payload.todo]
      break

  }
  return state
}
