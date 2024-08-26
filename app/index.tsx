import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {
    NotoSerif_400Regular,
    NotoSerif_400Regular_Italic,
    NotoSerif_700Bold,
    NotoSerif_700Bold_Italic
} from '@expo-google-fonts/noto-serif'
import { useEffect, useMemo } from 'react'
import Header from '../src/components/header'
import ContainerWithImage from '../src/components/containers/ContainerWithImage'
import HorizontalListMemo from '../src/components/containers/HorizontalList'
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
    const featuresBooksSearchParams = useMemo(
        () => ({ ids:'345,43,68283,74147,100,2600,1661' }),
        []
    )
    return !fontsLoaded ? null : (
        <View className="flex-1 flex-col h-full items-center bg-alternateBackground gap-2">
            <Header />
            <ScrollView className="w-full">
                <ContainerWithImage
                    image={require('../assets/images/book-collection-brown-3.avif')}
                    description="Classic and modern literature collections"
                    title="Thousands of free books, read and download"
                />
                <Link href="/home" className="w-full mt-8" asChild>
                    <Text className="text-secondary font-text text-xl text-center">
                        vista donde esta el home etc
                    </Text>
                </Link>
                <HorizontalListMemo
                    params={featuresBooksSearchParams}
                    title="Featured books"
                />
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    )
}
export default App

//// Información sobre la propiedad de la aplicación
//const appOwnership = Constants.appOwnership;
//// "expo": si se ejecuta en Expo Go
//// "standalone": si se ejecuta como una aplicación independiente
//// "guest": si se ejecuta en un cliente Expo de un proyecto que no es tuyo
//// Identificador único para el dispositivo
//const deviceId = Constants.deviceId;
//// Ejemplo: "123e4567-e89b-12d3-a456-426614174000"
//
//// Nombre del dispositivo
//const deviceName = Constants.deviceName;
//// Ejemplo: "iPhone 12"
//// Configuración de Expo especificada en app.json o app.config.js
//const expoConfig = Constants.expoConfig;
//// Ejemplo: { "name": "MyApp", "slug": "my-app", ... }
//
