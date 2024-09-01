import { View, Text } from 'react-native'
import constants from 'expo-constants'
import { Link } from 'expo-router'
// Components/header/index.tsx
type Props = {
    title?: string
    back?: { to: string; title?: string; aditionalStyle?: string }
    aditionalStyle?: string
    backgroundColor?: string
}
const NavigationHeader = ({ title, back, aditionalStyle }: Props) => {
    return (
        <View
            style={{
                paddingTop: constants.statusBarHeight
            }}
            className={
                aditionalStyle ?? 'w-full px-2 py-4 bg-alternateBackground gap-y-2 flex-row'
            }
        >
            {back && (
                <Link
                    href={back.to}
                    className={back.aditionalStyle ?? 'flex-1'}
                >
                    {back.title ?? 'Back'}
                </Link>
            )}
            <Text className="w-full text-darkText font-textBold text-2xl flex-[8] px-2">
                {title}
            </Text>
            <Text className="flex-1">{/* <SearchBar /> */}</Text>
        </View>
    )
}
export default NavigationHeader
