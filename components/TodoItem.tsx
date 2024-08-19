import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export interface TodoItemProps {
  name: string
  complete: boolean
  toggle: () => void
}

export default function TodoItem({ name, complete, toggle }: TodoItemProps) {
  return (
    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.25)" onPress={toggle}>
      <View style={styles.item}>
        <View style={styles.checkbox}>
          <Text>{complete ? '✔️' : ''}</Text>
        </View>
        <Text
          style={StyleSheet.flatten([
            styles.text,
            complete && styles.textComplete,
          ])}
        >
          {name}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  checkbox: {
    width: 30,
    margin: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    flex: 1,
  },
  textComplete: {
    textDecorationLine: 'line-through',
  },
})
