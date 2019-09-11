export default (state = {
  todos: undefined,
}, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case 'READ_TODO':
      return {
        ...state,
        todos: action.payload.sort((a, b) => b.todoId - a.todoId),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(
          item => (item.todoId === action.payload.todoId ? action.payload : item),
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(
          item => item.todoId !== action.deleteId,
        ),
      };
    default:
      return state;
  }
};
