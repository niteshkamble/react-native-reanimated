import { Button, StyleSheet, View } from "react-native"
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated"
import { Circle, Svg } from 'react-native-svg';

const AnimatingProps = () => {
    const radius = useSharedValue(20);
    const AnimatedCirlcle = Animated.createAnimatedComponent(Circle);

    const handlePress = () => {
        radius.value += 10;
    }

    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(radius.value),
    }))

    return (
        <>
            <View style={styles.constianer}>
                <Svg style={styles.svg}>
                    <AnimatedCirlcle cx="50%" cy="50%" r={radius} fill='orange' animatedProps={animatedProps} />
                </Svg>
                <Button onPress={handlePress} title='Click me' />
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    constianer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    svg: {
        height: "60%",
        width: '100%',
    }
})


export default AnimatingProps