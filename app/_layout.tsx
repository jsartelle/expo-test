import { Link, Stack } from 'expo-router'

export default function RootLayout() {
  const addItemButton = () => <Link href="/addItem">Add Item</Link>

  /* TODO support dark mode - try Tamagui */
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Todos', headerRight: addItemButton }}
      />
      <Stack.Screen
        name="addItem"
        options={{ presentation: 'modal', title: 'New Item' }}
      />
    </Stack>
  )
}
