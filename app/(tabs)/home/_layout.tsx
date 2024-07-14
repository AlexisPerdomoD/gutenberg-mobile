// home router

import { Stack } from 'expo-router'

// /home/_layout.tsx
export default () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="[BookDetailScreen]" options={{ headerShown: false }} />
        </Stack>
    )
}
