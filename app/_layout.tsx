// _layout.tsx
import { Stack } from 'expo-router'

export default () => {
    return (
        <Stack>
            {/* en algun punto quizas el signin y signup estaria por aqui  */}
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}
