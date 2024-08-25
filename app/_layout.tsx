import TodoStore from '@/stores/TodoStore'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { CheckSquare2, Plus } from '@tamagui/lucide-icons'
import { Stack, useRouter } from 'expo-router'
import { Observer } from 'mobx-react-lite'
import type { ComponentProps } from 'react'
import { Platform, useColorScheme } from 'react-native'
import { Button, TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'

if (Platform.OS === 'web') {
  require('../tamagui-web.css')
}

export function ToolbarButton(props: ComponentProps<typeof Button>) {
  return (
    <Button
      backgroundColor="transparent"
      hoverStyle={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      }}
      pressStyle={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        opacity: 0.5,
      }}
      {...props}
    />
  )
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const router = useRouter()

  const hideCompleteButton = () => (
    <Observer>
      {() => (
        <ToolbarButton
          onPress={() => TodoStore.toggleHideComplete()}
          icon={<CheckSquare2 size="$1" />}
          opacity={TodoStore.hideComplete ? 0.25 : 1}
        />
      )}
    </Observer>
  )

  const addItemButton = () => (
    <ToolbarButton
      onPress={() => router.push('/addItem')}
      icon={<Plus size="$1" />}
    />
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
