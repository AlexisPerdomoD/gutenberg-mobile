import React from 'react'
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

type Props = {
    image: ImageSourcePropType
    title?: string
    description?: string
}
// Components/ContainerWithImage.tsx
export default ({ image, title, description }: Props) => {
    return (
        <ImageBackground
            source={image}
            className="flex-1 resizeMode-cover justify-center items-center bg-lightBackground w-full h-auto aspect-[12/16]"
        >
            <View className="w-full p-2">
                {title && <Text className="text-lightText font-textBold text-4xl mb-1 text-center">{title}</Text>}
                {description && <Text className="text-lightText font-text text-xs text-center">{description}</Text>}
            </View>
        </ImageBackground>
    )
}
