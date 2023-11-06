import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const BasicAnimation = () => {
    
    const width = useSharedValue(100);

    const handlePress = () => {
        width.value = withSpring(width.value + 50);
    }


    return (
        <View style={styles.root}>
            <Animated.View style={{ width, height: 100, backgroundColor: 'orange', borderRadius: 10,marginVertical:20 }}></Animated.View>
            <Button onPress={handlePress} title='Click me' />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});



export default BasicAnimation