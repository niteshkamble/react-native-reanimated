import { Button, StyleSheet, View } from 'react-native'
import Animated, { useSharedValue,useAnimatedStyle, withSpring } from 'react-native-reanimated'

const useAnimatedStyle_ = () => {
    const translateX = useSharedValue(0);

    const handlePress = () => {
        translateX.value += 50;
    }

    const animatedStyle = useAnimatedStyle(()=> ({
        transform:[{translateX:withSpring(translateX.value * 2)}],
    }))

  return (
    <View style={styles.constianer}>
        <Animated.View style={[styles.box,animatedStyle]}></Animated.View>
        <Button onPress={handlePress} title='Click me' />
    </View>
  )
}

const styles = StyleSheet.create({
    
    constianer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    box:{
        height:100,
        width:100,
        backgroundColor:'orange',
        borderRadius:10,
        marginVertical:20
    }
})

export default useAnimatedStyle_