import TodoStore from '@/stores/TodoStore'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Link, Stack } from 'expo-router'
import { Observer } from 'mobx-react-lite'
import { Platform, useColorScheme } from 'react-native'
import { TamaguiProvider, Text } from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'

if (Platform.OS === 'web') {
  require('../tamagui-web.css')
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const hideCompleteButton = () => (
    <Observer>
      {() => (
        <Text onPress={() => TodoStore.toggleHideComplete()}>
          {TodoStore.hideComplete ? 'Show Checked' : 'Hide Checked'}
        </Text>
      )}
    </Observer>
  )

  const addItemButton = () => (
    <Link href="/addItem">
      {/* TODO use icon instead */}
      <Text>Add Item</Text>
    </Link>
  )

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'Todos',
              headerLeft: hideCompleteButton,
              headerRight: addItemButton,
            }}
          />
          <Stack.Screen
            name="addItem"
            options={{ presentation: 'modal', title: 'New Item' }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
