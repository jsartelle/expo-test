import { Check as CheckIcon } from '@tamagui/lucide-icons'
import { useId } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { Checkbox, Label, ListItem } from 'tamagui'

export interface TodoItemProps {
  /* TODO pass in the ID and grab these from the store instead? */
  name: string
  complete: boolean
  toggle: () => void
}

export default function TodoItem({ name, complete, toggle }: TodoItemProps) {
  const id = useId()

  function itemPressed(e: GestureResponderEvent) {
    e.preventDefault()
    e.stopPropagation()
    toggle()
  }

  return (
    <ListItem
      onPress={itemPressed}
      gap={20}
      borderBottomWidth={1}
      pressStyle={{ opacity: 0.5 }}
    >
      <Checkbox id={id} checked={complete} onPress={itemPressed}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>
      <Label htmlFor={id} onPress={itemPressed} flex={1}>
        {name}
      </Label>
    </ListItem>
  )
}
