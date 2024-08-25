import TodoStore from '@/stores/TodoStore'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Button, Input, YStack } from 'tamagui'

export default function AddItem() {
  const [name, setName] = useState('')
  const router = useRouter()

  const save = () => {
    if (name.length > 0) {
      TodoStore.addTodo(name)
      setName('')
      if (router.canDismiss()) {
        router.dismiss()
      } else {
        router.push('/')
      }
    }
  }

  const disabled = name.length === 0

  return (
    <YStack padding={20} gap={20}>
      <Input
        placeholder="Item name"
        autoFocus
        defaultValue={name}
        onChangeText={setName}
        enablesReturnKeyAutomatically={true}
        enterKeyHint="done"
        onSubmitEditing={save}
      />
      <Button disabled={disabled} onPress={save}>
        Save
      </Button>
    </YStack>
  )
}
