import TodoItem from '@/components/TodoItem'
import TodoStore from '@/stores/TodoStore'
import { Link, useNavigation } from 'expo-router'
import { observer } from 'mobx-react-lite'
import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default observer(function Index() {
  const [hideChecked, setHideChecked] = useState(true)
  const hideCheckedButton = useCallback(
    () => (
      <Text onPress={() => setHideChecked(!hideChecked)}>
        {hideChecked ? 'Hide Checked' : 'Show Checked'}
      </Text>
    ),
    [hideChecked]
  )
  const addItemButton = () => <Link href="/addItem">Add Item</Link>

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerLeft: hideCheckedButton,
      headerRight: addItemButton,
    })
  }, [navigation, hideCheckedButton])

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {(hideChecked ? TodoStore.todos : TodoStore.incompleteTodos).map(
        (item) => (
          <TodoItem
            key={item.id}
            {...item}
            toggle={() => TodoStore.toggle(item.id)}
          />
        )
      )}
    </View>
  )
})
