import { makeAutoObservable } from 'mobx'
import uuid from 'react-native-uuid'

export interface Todo {
  id: string
  name: string
  complete: boolean
}

/* TODO get decorators working */
class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  todos: Todo[] = [
    {
      id: uuid.v4() as string,
      name: 'Practice Expo',
      complete: false,
    },
    {
      id: uuid.v4() as string,
      name: 'Buy eggs',
      complete: true,
    },
    {
      id: uuid.v4() as string,
      name: 'Clean room',
      complete: false,
    },
  ]

  hideComplete = false

  get incompleteTodos() {
    return this.todos.filter((t) => !t.complete)
  }

  addTodo(name: string) {
    this.todos.push({
      id: uuid.v4() as string,
      name,
      complete: false,
    })
  }

  toggle(id: string) {
    const todo = this.todos.find((t) => t.id === id)
    if (!todo) throw new Error(`Could not find todo with id ${id}`)
    todo.complete = !todo.complete
  }

  toggleHideComplete() {
    this.hideComplete = !this.hideComplete
  }
}

export default new TodoStore()
