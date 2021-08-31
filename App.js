/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// * redux
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './src/store';
import {setText} from './src/store/app/actions';

const Component = () => {
  // * get the state
  const appReducer = useSelector(state => state.app);

  // * state action
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{appReducer.text}</Text>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setText('Test'));
          }}>
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#8D5FD3',
    padding: 10,
    borderRadius: 2,
    marginTop: '10%',
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
export default App;
