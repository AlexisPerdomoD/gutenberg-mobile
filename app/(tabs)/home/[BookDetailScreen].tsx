import { useLocalSearchParams } from 'expo-router'
import { useMemo } from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'
import { Book } from '../../../src/models'
import { AnimatedView } from '../../../src/components/containers/AnimatedView'
import NavigationHeader from '../../../src/components/header/NavigationHeader'
// home/[BookDetailScreen].tsx
export default function BookDetailScreen() {
    const bookInfoString = useLocalSearchParams<{ BookDetailScreen?: string }>()
    const bookInfo = useMemo(
        () =>
            bookInfoString.BookDetailScreen &&
            (JSON.parse(bookInfoString.BookDetailScreen) as Book),
        [bookInfoString]
    )
    if (!bookInfo) return null
    return (
        <AnimatedView>
            <ScrollView>
                <NavigationHeader
                    title={bookInfo.title}
                    back={{ to: '/home', title: 'Home' }}
                />
                <View className="w-full">
                    <ImageBackground
                        source={{ uri: bookInfo.formats['image/jpeg'] }}
                        imageStyle={{ resizeMode: 'stretch' }}
                        className="w-full aspect-[15/16] object-contain justify-end items-center"
                    >
                        <Text className="text-lightText font-textBoldItalic text-2xl text-center p-2 shadow shadow-primary">
                            {bookInfo.title}
                        </Text>
                    </ImageBackground>
                </View>
                <View className="w-full p-2">
                    <Text className="text-darkText font-textBold text-2xl py-2">
                        {bookInfo.title}
                    </Text>
                    <Text className="text-primary font-textItalic py-2">
                        {bookInfo.authors[0].name}{' '}
                        {bookInfo.authors[0].birth_year} -{' '}
                        {bookInfo.authors[0].death_year}
                    </Text>
                    <Text className="text-darkText font-text py-2">
                        Language(s): {bookInfo.languages.join()}
                    </Text>
                    <Text className="text-darkText font-text py-2">
                        {JSON.stringify(Object.keys(bookInfo.formats))}
                    </Text>
                </View>
                <Text className="text-darkText font-text py-2">
                    {bookInfo.copyright ? 'Copyrighted' : 'Not copyrighted'}
                </Text>
            </ScrollView>
        </AnimatedView>
    )
}
