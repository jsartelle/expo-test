import TodoItem from '@/components/TodoItem'
import TodoStore from '@/stores/TodoStore'
import { observer } from 'mobx-react-lite'
import { YStack } from 'tamagui'

export default observer(function Index() {
  return (
    <YStack flex={1}>
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
    </YStack>
  )
})
