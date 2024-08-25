// _layout.tsx
import { Stack } from 'expo-router'

export default function RootLayout () {
    return (
        <Stack
            screenOptions={{
                headerShown: false

            }}
        >
            {/* en algun punto quizas el signin y signup estaria por aqui  */}
        </Stack>
    )
}
