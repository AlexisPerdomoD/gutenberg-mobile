import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hola bebesote</Text>
            <Link href="/screens/ListBooksScreen">ListBooksScreen</Link>
            <Link href="/screens/about">About</Link>
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
