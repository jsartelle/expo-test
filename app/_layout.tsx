import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { Platform, useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'

import { tamaguiConfig } from '../tamagui.config'

if (Platform.OS === 'web') {
  require('../tamagui-web.css')
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Todos' }} />
          <Stack.Screen
            name="addItem"
            options={{ presentation: 'modal', title: 'New Item' }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
