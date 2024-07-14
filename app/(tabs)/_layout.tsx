import { Tabs } from 'expo-router'
// screens/(tabs)/_layout.tsx
export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="DetailedSearch" />
            <Tabs.Screen name="about" />
        </Tabs>
    )
}
