import { Stack } from 'expo-router'

export default function RootLayout() {
  /* TODO support dark mode - try Tamagui */
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Todos' }}
      />
      <Stack.Screen
        name="addItem"
        options={{ presentation: 'modal', title: 'New Item' }}
      />
    </Stack>
  )
}
