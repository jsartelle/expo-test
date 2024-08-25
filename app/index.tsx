import TodoItem from '@/components/TodoItem'
import TodoStore from '@/stores/TodoStore'
import { observer } from 'mobx-react-lite'
import { View } from 'react-native'

export default observer(function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {(TodoStore.hideComplete
        ? TodoStore.incompleteTodos
        : TodoStore.todos
      ).map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggle={() => TodoStore.toggle(item.id)}
        />
      ))}
    </View>
  )
})
