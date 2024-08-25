import { Tabs } from 'expo-router'
// screens/(tabs)/_layout.tsx
export default function MainLayout () {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home'
                }}
            />
            <Tabs.Screen name="DetailedSearch" options={{ title: 'Search' }} />
            <Tabs.Screen name="about" options={{ title: 'About' }} />
        </Tabs>
    )
}
