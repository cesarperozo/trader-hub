import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { styles } from './AppGestureHandlerRoot.styles'

export default function AppGestureHandlerRoot({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GestureHandlerRootView style={styles.container}>
      {children}
    </GestureHandlerRootView>
  )
}
