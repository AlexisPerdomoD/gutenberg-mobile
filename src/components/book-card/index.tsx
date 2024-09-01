import { Animated, Image, Pressable, Text, View } from 'react-native'
import { Book } from '../../../src/models'
import { useEffect, useRef } from 'react'
import { router } from 'expo-router'
type Props = {
    book: Book
}
export const BookCard = ({ book }: Props) => {
    return (
        <Pressable
            className="shadow"
            onPress={() =>
                router.push({
                    pathname: '/home/[BookDetailScreen]',
                    params: { BookDetailScreen: JSON.stringify(book) }
                })
            }
        >
            <View className="w-full p-2">
                <Image source={{ uri: book.formats['image/jpeg'] }} className="w-full aspect-video rounded-xl " />
                <Text className="text-darkText font-textBold text-xl p-1">{book.title}</Text>
                <Text className="text-primary font-text text-base p-1">{book.authors[0].name}</Text>
                <Text className="font-text text-darkText">{`[${book.languages.join(', ')}]`}</Text>
            </View>
        </Pressable>
    )
}

export const AnimatedBookCard = ({ book, index }: Props & { index: number }) => {
    const opacity = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            delay: index * 250,
            duration: 500,
            useNativeDriver: true
        }).start()
    }, [opacity, index])
    return (
        <Animated.View style={{ opacity }}>
            <BookCard book={book} />
        </Animated.View>
    )
}
