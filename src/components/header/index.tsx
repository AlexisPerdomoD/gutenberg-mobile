import { View, Text } from 'react-native'
import constants from 'expo-constants'
// Components/header/index.tsx
const Header = () => {
    return (
        <View style={{ paddingTop: constants.statusBarHeight }} className="w-full p-2 justify-center items-center bg-alternateBackground">
            <Text className="text-darkText font-textBold text-2xl text-center">Gutenberg</Text>
        </View>
    )
}
export default Header
