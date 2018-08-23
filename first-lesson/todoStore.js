import { createStore } from 'redux'
import todoApp from './reducers'
import * as actions from './actions'

const store = createStore(todoApp)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(actions.addTodo('New todo text'))
store.dispatch(actions.addTodo('new todo text 2'))
store.dispatch(actions.toggleTodo(0))
store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED))
