import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { Book } from '../../../src/models'
import gutendex from '../../../src/services/gutendex'
import Header from '../../../src/components/header'
import { AnimatedBookCard } from '../../../src/components/book-card'
// screens/home/index.tsx
export default function Home() {
    const [books, setBooks] = useState<Book[] | null>(null)
    useEffect(() => {
        gutendex.clearParamsUrl()
        gutendex.getBooks().then((data) => {
            setBooks(data.results)
        })
    }, [])

    //<Button onPress={() => router.push('/home/3')} title="Go to BookDetailScreen with id 3" />
    //        <Button
    //            onPress={() =>
    //                router.push({
    //                    pathname: '/home/[BookDetailScreen]',
    //                    params: { BookDetailScreen: '1' }
    //                })
    //            }
    //            title="Go to ListBooksScreen with id 1"
    //        />

    return (
        <View className="flex-1 h-full bg-alternateBackground">
            <Header />
            {!books ? (
                <View className="flex-1 h-full items-center justify-center">
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <FlatList
                    data={books}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => {
                        return <AnimatedBookCard book={item} index={index} />
                    }}
                />
            )}
        </View>
    )
}
