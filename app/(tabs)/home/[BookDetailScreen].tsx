import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
// screens/[BookDetailScreen].tsx
export default () => {
    const bookID = useLocalSearchParams<{ BookDetailScreen: string }>()
    return (
        <View>
            <Text>BookDetailScreen {bookID.BookDetailScreen}</Text>
        </View>
    )
}
