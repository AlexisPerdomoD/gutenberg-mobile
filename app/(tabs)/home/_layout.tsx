// home router

import { Stack } from 'expo-router'

// /home/_layout.tsx
export default function HomeLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[BookDetailScreen]" />
        </Stack>
    )
}
