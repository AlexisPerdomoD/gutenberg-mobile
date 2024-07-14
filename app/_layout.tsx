// _layout.tsx
import { Stack } from 'expo-router'

export default () => {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="screens/ListBooksScreen" options={{ headerShown: false }} />
            <Stack.Screen name="screens/about" options={{ headerShown: false }} />
        </Stack>
    )
}
