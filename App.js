/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import *as Screens from './src/index';


const { Screen, Navigator } = createStackNavigator();



const App = (props) => (


  <NavigationContainer>
    <Navigator>
      <Screen name="Splash" component={Screens.Splash} options={{ headerShown: false }} />
      <Screen name="SongList" component={Screens.SongList} />
      <Screen name="SongDetails" component={Screens.SongDetails} />
    </Navigator>
  </NavigationContainer>
);



export default App;
