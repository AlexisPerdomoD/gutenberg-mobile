import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// app/index.tsx
const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hola bebesote, esta sera la vista principal de bienvenida</Text>
            <Link href="(tabs)"> vista donde esta el home etc</Link>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default App
