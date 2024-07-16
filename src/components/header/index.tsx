import { View, Text } from 'react-native'

// Components/header/index.tsx
const Header = () => {
    return (
        <View className="w-full p-2 justify-center items-center bg-alternateBackground">
            <Text className="text-darkText font-textBold text-2xl text-center">Gutenberg</Text>
        </View>
    )
}
export default Header
