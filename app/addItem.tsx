import TodoStore from '@/stores/TodoStore'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

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

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text>Name</Text>
        <TextInput
          autoFocus
          style={styles.input}
          onChangeText={setName}
          enablesReturnKeyAutomatically={true}
          enterKeyHint="done"
          onSubmitEditing={save}
        />
      </View>
      <Button disabled={name.length === 0} title="Save" onPress={save} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  inputRow: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    alignSelf: 'stretch',
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
})
