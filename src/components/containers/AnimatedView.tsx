import React, { ReactNode, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

type Props = {
    children: ReactNode
    className?: string
}

export const AnimatedView = (props: Props) => {
    const opacity = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            delay: 250,
            duration: 500,
            useNativeDriver: true
        }).start()
    }, [opacity])
    return (
        <Animated.View {...props} style={{ opacity }}>
            {props.children}
        </Animated.View>
    )
}
