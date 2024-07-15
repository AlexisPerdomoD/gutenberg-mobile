import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../src/styles'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {
    NotoSerif_400Regular,
    NotoSerif_400Regular_Italic,
    NotoSerif_700Bold,
    NotoSerif_700Bold_Italic
} from '@expo-google-fonts/noto-serif'
import { useEffect } from 'react'
/**
 * prevents the splash screen from being automatically hidden
 * used to load fonts
 * */
SplashScreen.preventAutoHideAsync()

// app/index.tsx
const App = () => {
    // Load Fonts and hide the splash screen
    const [fontsLoaded, err] = useFonts({
        'NotoSerif Regular': NotoSerif_400Regular,
        'NotoSerif Italic': NotoSerif_400Regular_Italic,
        'NotoSerif Bold': NotoSerif_700Bold,
        'NotoSerif Bold Italic': NotoSerif_700Bold_Italic
    })
    useEffect(() => {
        if (fontsLoaded || err) SplashScreen.hideAsync()
    }, [fontsLoaded, err])

    return !fontsLoaded ? (
        null
    ) : (
        <View style={styles.container}>
            <Text
                style={{
                    fontFamily: 'NotoSerif Bold',
                    fontSize: globalStyles.fontSize.xl,
                    color: globalStyles.colors.primary
                }}
            >
                Gutenberg
            </Text>
            <Link href="(tabs)/home">
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: globalStyles.fontSize.l,
                        color: globalStyles.colors.primary
                    }}
                >
                    vista donde esta el home etc
                </Text>
            </Link>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.colors.lightBackground
    }
})
export default App
