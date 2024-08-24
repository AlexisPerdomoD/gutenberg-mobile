import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { Book } from '../../../src/models'
import gutendex from '../../../src/services/gutendex'
// screens/home/index.tsx
export default () => {
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
        <View>
            <Text>Home, here will be list the general books collection</Text>
            <FlatList
                data={books}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Button
                            onPress={() =>
                                router.push({
                                    pathname: '/home/[BookDetailScreen]',
                                    params: { BookDetailScreen: item.id.toString() }
                                })
                            }
                            title="Go to BookDetailScreen"
                        />
                    </View>
                )}
            />
        </View>
    )
}
