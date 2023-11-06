import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';

const App = (props: {componentId: string}) => {
  // All list data should be here
  const DATA = [
    {
      id: 'BasicAnimation',
      title: 'Basic Animation',
      subtitle: 'userSharedValue : inline styling',
    },
    {
      id: 'useAnimatedStyle',
      title: 'useAnimatedStyle',
      subtitle: 'This hook lets you access the value stored in shared value n keeps all the animation related logic in one place.',
    },
    {
      id: 'AnimatingProps',
      title: 'Animating Props',
      subtitle: 'use of #createAnimatedComponent for component which arent part of Reanimated. use of #useAnimatedProps hook.',
    },
  ];

  const handleClick = (id: string,title:string) => {
    Navigation.push(props.componentId, {
      component: {
        name: id,
        options: {
          topBar: {
            title: {
              text: title,
            },
          },
        },
      },
    });
  };

  const Item = (props: {title: string; subtitle: string; id: string}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleClick(props.id,props.title)}>
      <Text style={styles.title}>{props.title}</Text>
      {props?.subtitle ? (
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <FlatList
        style={{width: '100%'}}
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} subtitle={item.subtitle} id={item.id} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'React Native Reanimated',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  title: {
    fontSize: 17,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
  },
  item: {
    padding: 10,
    backgroundColor: 'white',
    margin: 4,
    borderRadius: 4,
    elevation: 2,
  },
});

export default App;
