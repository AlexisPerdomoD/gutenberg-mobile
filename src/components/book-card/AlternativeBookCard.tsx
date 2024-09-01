import { Animated, Image, Pressable, Text, View } from 'react-native'
import { Book } from '../../../src/models'
import { useEffect, useRef } from 'react'
import { router } from 'expo-router'
type Props = {
    book: Book
    className?: string
}

export const AlternativeBookCard = ({ book, ...props }: Props) => {
    return (
        <Pressable
            className="shadow"
            onPress={() =>
                router.push({
                    pathname: '/home/[BookDetailScreen]',
                    params: {
                        BookDetailScreen: JSON.stringify(book),
                    }
                })
            }
        >
            <View {...props} className="w-full">
                <Image
                    source={{ uri: book.formats['image/jpeg'] }}
                    className="w-full aspect-[12/16] rounded-xl mb-4 "
                />
                <Text className="text-darkText font-textBold text-lg p-1">
                    {book.title}
                </Text>
                <Text className="text-primary font-text text-sm p-1">
                    {book.authors?.[0]?.name || 'Unknown author'}
                </Text>
            </View>
        </Pressable>
    )
}

export const AnimatedAlternativeBookCard = ({
    book,
    index
}: Props & { index: number }) => {
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
            <AlternativeBookCard book={book} />
        </Animated.View>
    )
}
