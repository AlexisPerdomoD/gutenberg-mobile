import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { memo, useEffect, useState } from 'react'

import { Book } from '../../models'
import { Params } from '../../models/gutendex'
import { GutendexMannager } from '../../services/gutendex'
import { AnimatedAlternativeBookCard } from '../book-card/AlternativeBookCard'

type Props = {
    params: Params
    title?: string
}

function HorizontalList({ params, title }: Props) {
    const [books, setBooks] = useState<Book[] | null>(null)
    useEffect(() => {
        const gutendex = new GutendexMannager()
        gutendex.getBooks(params).then((data) => setBooks(data.results))
    }, [params])

    return (
        <View className="py-4">
            {title && (
                <Text className="text-darkText font-textBold text-2xl px-2 pb-4">
                    {title}
                </Text>
            )}

            {books ? (
                <FlatList
                    className="p-2"
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    data={books}
                    renderItem={({ item, index }) => (
                        <View className="w-52 h-fit p-2">
                            <AnimatedAlternativeBookCard
                                book={item}
                                index={index}
                            />
                        </View>
                    )}
                />
            ) : (
                <View className="flex-1 h-40 items-center justify-center">
                    <ActivityIndicator size="large" />
                </View>
            )}
        </View>
    )
}

const HorizontalListMemo = memo(HorizontalList)
export default HorizontalListMemo
