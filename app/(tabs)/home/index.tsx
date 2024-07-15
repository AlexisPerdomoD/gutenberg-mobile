import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'
// screens/home/index.tsx
export default () => {
    return (
        <View>
            <Text>Home, here will be list the general books collection</Text>
            <Button onPress={() => router.push('/home/3')} title="Go to BookDetailScreen with id 3" />
            <Button
                onPress={() =>
                    router.push({
                        pathname: '/home/[BookDetailScreen]',
                        params: { BookDetailScreen: '1' }
                    })
                }
                title="Go to ListBooksScreen with id 1"
            />
        </View>
    )
}
